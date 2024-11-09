// index.ts
import axios from 'axios';
import { store } from '../store/store';
import { removeLocalData } from '../utils/storage';

const api = axios.create({
  // The issue is here - you're using API_URL instead of VITE_API_URL
  baseURL: import.meta.env.VITE_API_URL // Changed from API_URL to VITE_API_URL
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('Request Error :', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.status === 401 || error?.response?.status === 401) {
      removeLocalData();
      location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export default api;
