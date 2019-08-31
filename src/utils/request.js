import axios from 'axios';

/**
 *
 * @param {string} url A url from a network.
 * @param {object} options Options to config request.
 * See more option here: https://github.com/axios/axios
 */
export default function request(url = '', options = {}) {
  const { method = 'get', responseType = 'json', data = {}, ...config } = options;
  return axios({
    method,
    url,
    responseType,
    data,
    ...config,
  });
}
