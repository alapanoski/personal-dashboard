import { Redis } from "ioredis"

function getRedisCredentials() {
  const redisPort = process.env.REDIS_PORT
  const redisHost = process.env.REDIS_HOST
  const redisPassword = process.env.REDIS_PASSWORD

  if (!redisPort || redisPort.length === 0) {
    throw new Error("Missing REDIS_PORT")
  }
  if (!redisHost || redisHost.length === 0) {
    throw new Error("Missing REDIS_HOST")
  }
  if (!redisPassword || redisPassword.length === 0) {
    throw new Error("Missing REDIS_PASSWORD")
  }

  return {
    redistPort: parseInt(redisPort),
    redisHost,
    redisPassword,
  }
}

const redis = new Redis({
  port: getRedisCredentials().redistPort,
  host: getRedisCredentials().redisHost,
  family: 4,
  password: getRedisCredentials().redisPassword,
  db: 0,
})

export default redis
