import React, { useEffect } from 'react';
import loginCallback from '../../apis/auth/Login';

const CallbackPage = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const code = urlParams.get('code');
  console.log('Code:', code);

  useEffect(() => {
    if (code) {
      loginCallback(code).then(token => {
        localStorage.setItem('accessToken', token);
        window.location.replace(import.meta.env.VITE_REACT_APP_MY_REDIRECT_URL);
      });
    }
  }, [code]);

  return <div>깃허브 인가 코드를 받아 오는 중입니다.</div>;
};

export default CallbackPage;
