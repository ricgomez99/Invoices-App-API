import { Sequelize } from 'sequelize'
import {
  DB_HOST,
  DB_NAME,
  DB_PASSORD,
  DB_PORT,
  DB_URI,
  DB_USER,
} from './config.js'

export const sequelizeConnection = new Sequelize({
  host: DB_HOST,
  dialect: 'mysql',
  database: DB_NAME,
  password: DB_PASSORD,
  port: DB_PORT,
  username: DB_USER,
})
