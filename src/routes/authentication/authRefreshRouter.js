import { AuthController } from '../../Controllers/auth/authController.js'
import { Router } from 'express'

export const createRefreshAuthRouter = ({ authModel }) => {
  const authRouter = Router()
  const authController = new AuthController({ authModel })

  authRouter.post('/', authController.refreshToken)

  return authRouter
}
