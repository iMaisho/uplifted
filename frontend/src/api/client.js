import axios from 'axios';

const API_URL = __DEV__
  ? 'http://localhost:4000/api'
  : 'https://your-prod-url.com/api';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const checkHealth = () => api.get('/health');
