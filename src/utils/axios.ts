import axios from 'axios';
import qs from 'qs';

const defaultOptions = {
  baseURL: 'https://gorest.co.in/public/v1/', // url do api
  timeout: 10000, // jak dlugo probuje sie polaczyc
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer 8af0b0b984201dca3c650807e46b60adf3a502b67b03965443f1f11248e1e95f',
  },
  paramsSerializer: (params: unknown) =>
    qs.stringify(params, { arrayFormat: 'repeat' }),
};

const Axios = axios.create(defaultOptions);
export default Axios;
