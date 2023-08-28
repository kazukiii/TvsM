import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Payload } from '../middleware/auth'

const prisma = new PrismaClient()

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, phone } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
      },
    })

    res.json(newUser)
  } catch (error) {
    res.status(400).json({ error: 'Email already exists or some error occurred.' })
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return res.status(400).json({ error: 'Incorrect password' })
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY as string)

  res.json({ token })
}

export const getProfile = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: (req.user as Payload).userId } })
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json(user)
}
