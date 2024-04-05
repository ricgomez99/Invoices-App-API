import { jwtTokens } from './../../utils/jwtTokens.js'
import { tokenGenerator } from '../../utils/tokenGenerator.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export class AuthController {
  constructor({ authModel }) {
    this.authModel = authModel
  }

  login = async (req, res) => {
    const input = req.body
    const output = await this.authModel.login({ input })
    if (!output) {
      return res.status(400).json({ message: 'Not able to login user' })
    }

    const { accessToken, refreshToken } = jwtTokens({ user: output })
    if (accessToken && refreshToken) {
      await this.authModel.createNewToken({ refresh: refreshToken })
    }

    return res.status(200).json({
      message: 'User logged-in',
      accessToken: accessToken,
      refreshToken: refreshToken,
    })
  }

  refreshToken = async (req, res) => {
    const { refreshToken } = req.body
    const userId = await this.authModel.refreshToken(refreshToken)

    if (!userId) {
      return res.status(400).json({ message: 'Failed to load token' })
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid Token' })
      }

      const newToken = tokenGenerator({ userId: userId })
      return res.json({ accessToken: newToken })
    })
  }
}
