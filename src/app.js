import express, { json } from 'express'
import { sequelizeConnection } from './Models/mysql/db/connection.js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT ?? 3000

const testConnection = async () => {
  try {
    await sequelizeConnection.authenticate()
    console.log('Database connected successfully')
  } catch (error) {
    console.log(`Unable to stablish connection, ${error}`)
  }
}

export const createApp = async () => {
  await testConnection()
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
