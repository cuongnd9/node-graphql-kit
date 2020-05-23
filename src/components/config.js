export default {
  port: process.env.PORT || 9000,
  jwt: {
    secretKey: process.env.SECRET_KEY || 'csjhgt2gh',
    algorithm: process.env.ALGORITHM || 'HS256',
    expiresIn: process.env.EXPIRES_IN || '30m',
  },
};
