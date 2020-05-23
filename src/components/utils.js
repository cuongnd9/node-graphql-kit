import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';
import axios from 'axios';
import config from '@/config';

export function authenticate(req, res, next) {
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
}

export function authorize(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role)) {
      next();
    } else {
      throw Boom.forbidden('Your role is not allowed');
    }
  };
}

/**
 * @param {string} url A url from a network.
 * @param {object} options Options to config request.
 * See more option here: https://github.com/axios/axios
 */
export function request(url = '', options = {}) {
  const { method = 'get', responseType = 'json', data = {}, ...config } = options;
  return axios({
    method,
    url,
    responseType,
    data,
    ...config,
  });
}
