import express, { json } from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT ?? 3000

export const createApp = () => {
  app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
  })

  app.use(json())
  app.disable('x-powered-by')

  app.listen(port, () => {
    console.log(`App running on port: http://localhost:${port}`)
  })

  return app
}
