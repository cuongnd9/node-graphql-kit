import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';
import Umzug from 'umzug';
import config from './config';

export const authenticate = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    throw Boom.unauthorized('No token provided');
  }
  const { secretKey } = config.jwt;
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    throw Boom.unauthorized('Invalid access token');
  }
  next();
};

export const authorize = (...allowed) => {
  const isAllowed = (role) => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      throw Boom.forbidden('Your role is not allowed');
    }
  };
};

export const migrateDB = (sequelize, path) => new Umzug({
  migrations: {
    path,
    pattern: /\.migration.js$/,
    params: [
      sequelize.getQueryInterface(),
      sequelize.constructor,
      () => {
        throw new Error(`Migration tried to use old style "done" callback.
          Please upgrade to "umzug" and return a promise instead.`);
      },
    ],
  },
  storage: 'sequelize',
  storageOptions: { sequelize },
}).up();
