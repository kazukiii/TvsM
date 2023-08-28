import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export interface Payload {
  userId: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user?: Payload
    }
  }
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY as string, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }

      req.user = user as Payload
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
