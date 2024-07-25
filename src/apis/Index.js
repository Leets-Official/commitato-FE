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
      `Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25lZWVlZSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjE3MDE4NjN9.PcCmSLHgW7TCT8K2yvnruLe3kfNn9KGMNL4ruTL0hV8QlAXzJNSb9SszePuVgxB9ZkatnXa-oweg_-zSdr9CiA'}`;
  } else {
    delete httpClientForCredentials.defaults.headers.common['Authorization'];
  }
};
