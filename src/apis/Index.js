// src/api/index.js
import axios from 'axios';

export const httpClientForCredentials = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.VITE_SERVER_API_URL : '/',
  withCredentials: true,
});

// 토큰을 설정하는 함수
export const setAuthToken = token => {
  if (token) {
    httpClientForCredentials.defaults.headers.common['Authorization'] =
      `Bearer ${token}`;
  } else {
    delete httpClientForCredentials.defaults.headers.common['Authorization'];
  }
};
