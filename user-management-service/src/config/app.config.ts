export const AppConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || 'default_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  },
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/ums'
};
