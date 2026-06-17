import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});

export function uploadWebfleet(formData) {
  return api.post('/upload-webfleet', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function getAlexDashboard() {
  return api.get('/alex/dashboard');
}

export default api;