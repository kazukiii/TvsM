import express from 'express'
import { signup, login, getProfile } from '../controllers/userController'
import { authenticateJWT } from '../middleware/auth'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', authenticateJWT, getProfile)

export default router
