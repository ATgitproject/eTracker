/**
 * api.js
 * ------------------------------------------------------------------
 * Single Axios instance for the whole frontend. Attaches the JWT
 * (from useAuthStore) to every request automatically, and exposes
 * one function per backend endpoint so components/stores never
 * construct URLs by hand.
 * ------------------------------------------------------------------
 */
import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';

const client = axios.create({ baseURL: '/api' });

client.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ---- Auth -----------------------------------------------------------
export const authApi = {
  signup: (payload) => client.post('/auth/signup', payload),
  requestOtp: (identifier, purpose = 'login') => client.post('/auth/otp/request', { identifier, purpose }),
  verifyOtp: (identifier, code, purpose = 'login') => client.post('/auth/otp/verify', { identifier, code, purpose }),
  me: () => client.get('/auth/me'),
};

// ---- Transactions -----------------------------------------------------
export const transactionApi = {
  list: (params) => client.get('/transactions', { params }),
  summary: () => client.get('/transactions/summary'),
  create: (payload) => client.post('/transactions', payload),
};

// ---- Import -------------------------------------------------------------
export const importApi = {
  uploadStatement: (file, onProgress) => {
    const formData = new FormData();
    formData.append('statement', file);
    return client.post('/import/statement', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (evt) => onProgress?.(Math.round((evt.loaded * 100) / (evt.total || 1))),
    });
  },
};

export default client;
