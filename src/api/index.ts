import axios from 'axios';

export const API_URL = 'https://api-test-sk.herokuapp.com';
export const api = axios.create({ baseURL: API_URL });

export const setHeaderToken = (token: string) => {
  api.interceptors.request.use(function (config) {
    config.headers['X-Auth-Token'] = token;

    return config;
  });
};

export const removeHeaderToken = () => {
  api.interceptors.request.use(function (config) {
    delete config.headers['X-Auth-Token'];

    return config;
  });
};
