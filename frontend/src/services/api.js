import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 15000,
});

export function uploadWebfleet(formData) {
  return apiClient.post('/upload-webfleet', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
