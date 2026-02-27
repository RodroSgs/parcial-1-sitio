import axios from 'axios';

const api = axios.create ({
  baseURL: 'https://the-one-api.dev/v2',
  headers: {
    Authorization: 'AC18TLL-pFcuVT5HDOyw'
  }
});

export default api;