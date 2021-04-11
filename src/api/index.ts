import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({ baseURL: Config.API_URL });

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
