import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Will work with adb reverse

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkHealth = () => client.get('/api/health');