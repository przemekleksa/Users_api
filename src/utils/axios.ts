import axios from "axios";
import qs from 'qs';

const defaultOptions = {
    baseURL: 'https://swapi.dev/api/', // url do api
    timeout: 10000, // jak dlugo probuje sie polaczyc
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    paramsSerializer: (params: unknown) => qs.stringify(params, { arrayFormat: 'repeat' }),
  };
  
  const Axios = axios.create(defaultOptions);
  export default Axios;