import { httpClientForCredentials, setAuthToken } from '../Index';

const LOG_IN_PATH = '/home';
const TOKEN_REFRESH_PATH = '/refresh';

export const onLogInSuccess = response => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25lZWVlZSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjE4ODk2NjR9.sYj01nQ3JR_rmimNp1BGMaZKQu-xvFymTV04Uio_XVeiy_TX9zXobsIkz9IaFuQTbrfpffHTxx7KIkDLrwRQSg';
  const { refreshToken } = response.data.result;
  console.log('Login success response:', response.data);

  // AccessToken과 RefreshToken을 localStorage에 저장
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  console.log('Access Token and Refresh Token saved.');

  // axios 인스턴스에 Authorization 헤더 설정
  setAuthToken(accessToken);
  console.log('Authorization header set.');

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
    console.log('Attempting to log in with params:', params);
    const response = await httpClientForCredentials.post(LOG_IN_PATH, params);
    console.log('API response:', response);
    if (response.status === 200) {
      onLogInSuccess(response);
    } else {
      console.log('Login failed with status:', response.status);
    }
  } catch (error) {
    console.error('Login error:', error);
    console.error(
      'Login error details:',
      error.response?.data || error.message,
    );
  }
};

export const onSilentRefresh = async () => {
  try {
    const response = await httpClientForCredentials.post(TOKEN_REFRESH_PATH);
    if (response.status === 200) {
      onLogInSuccess(response);
    }
  } catch (error) {
    console.error('Token refresh error:', error);
    console.error(
      'Token refresh error details:',
      error.response?.data || error.message,
    );
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
  }
};
