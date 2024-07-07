export const configuration = () => ({
  port: Number(process.env.SERVER_PORT) || 3000,
  bcryptSalt: process.env.BCRYPT_SALT,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME || 'user',
    password: process.env.DATABASE_PASSWORD || 'password',
    name: process.env.DATABASE_NAME || 'auth',
    schema: process.env.DATABASE_SCHEMA || 'public',
  },
  jwt: {
    atSecret: process.env.AT_JWT_SECRET || 'secret',
    atExpirationTime: Number(process.env.AT_JWT_EXPIRATION_TIME) || 1800,
    rtSecret: process.env.RT_JWT_SECRET || 'rtsecret',
    rtExpirationTime: Number(process.env.RT_JWT_EXPIRATION_TIME) || 604800,
  },
  client: {
    cors: (process.env.CORS_CLIENT_URL || 'http://localhost:3000').split(','),
    aff: process.env.AFF_CLIENT_URL || 'http://localhost:3000',
  },
});
