import type { SequelizeOptions } from 'sequelize-typescript'
import * as tedious from 'tedious'

const config: SequelizeOptions = {
  // dialect: 'sqlite',
  // storage: process.env.DATABASE_URL as string,

  dialect: 'mssql',
  host: String(process.env.DATABASE_HOST),
  port: 1433,
  database: String(process.env.DATABASE_NAME),
  username: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  dialectModule: tedious,
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true
    },
  },
}

export default config
