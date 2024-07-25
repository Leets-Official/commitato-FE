// src/api/auth/login.js
import { httpClientForCredentials, setAuthToken } from '../Index';

const LOG_IN_PATH = '/login';
const TOKEN_REFRESH_PATH = '/refresh';

export const onLogInSuccess = response => {
  const { accessToken, refreshToken } = response.data.result;

  // AccessToken과 RefreshToken을 localStorage에 저장
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  console.log(response);

  // axios 인스턴스에 Authorization 헤더 설정
  setAuthToken(accessToken);

  // AccessToken 만료 1분 전에 RefreshToken으로 AccessToken을 받아오는 함수를 실행
  setTimeout(
    () => {
      onSilentRefresh();
    },
    (response.data.expiresIn - 60) * 1000,
  );
};

export const onLogIn = async params => {
  try {
    const response = await httpClientForCredentials.post(LOG_IN_PATH, params);
    if (response.status === 200) {
      onLogInSuccess(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const onSilentRefresh = async () => {
  try {
    const response = await httpClientForCredentials.post(TOKEN_REFRESH_PATH);
    if (response.status === 200) {
      onLogInSuccess(response);
    }
  } catch (error) {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
  }
};
