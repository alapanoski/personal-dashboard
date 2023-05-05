import { Pool } from "pg"

function getPosgtresCredentials() {
  const postgresUser = process.env.POSTGRES_USER
  const postgresHost = process.env.POSTGRES_HOST
  const postgresDatabase = process.env.POSTGRES_DATABASE
  const postgresPort = process.env.POSTGRES_PORT
  const postgresPassword = process.env.POSTGRES_PASSWORD

  if (!postgresUser || postgresUser.length === 0) {
    throw new Error("Missing POSTGRES_USER")
  }
  if (!postgresHost || postgresHost.length === 0) {
    throw new Error("Missing POSTGRES_HOST")
  }
  if (!postgresDatabase || postgresDatabase.length === 0) {
    throw new Error("Missing POSTGRES_DATABASE")
  }
  if (!postgresPort || postgresPort.length === 0) {
    throw new Error("Missing POSTGRES_PORT")
  }
  if (!postgresPassword || postgresPassword.length === 0) {
    throw new Error("Missing POSTGRES_PASSWORD")
  }

  return {
    postgresUser,
    postgresHost,
    postgresDatabase,
    postgresPort,
    postgresPassword,
  }
}

const pg = new Pool({
  user: getPosgtresCredentials().postgresUser,
  host: getPosgtresCredentials().postgresHost,
  database: getPosgtresCredentials().postgresDatabase,
  port: getPosgtresCredentials().postgresPort,
  password: getPosgtresCredentials().postgresPassword,
  ssl: {
    rejectUnauthorized: false,
  },
})

export default pg
