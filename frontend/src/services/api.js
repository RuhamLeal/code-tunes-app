import axios from 'axios';

const api = axios.create({
  baseURL: 'htpp://localhost:3000',
});

export default api;
