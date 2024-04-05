import cors from 'cors'

const ORIGINS = ['*']

export const corsMiddleware = ({ acceptOrigin = ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptOrigin.indexOf(origin) !== -1 || !origin) {
        return callback(null, true)
      } else {
        return callback(new Error('Not allowed by CORS'))
      }
    },
  })
