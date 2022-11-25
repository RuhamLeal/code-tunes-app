import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.229.143.23:3003',
});

export default api;
