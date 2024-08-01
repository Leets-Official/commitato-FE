import axios from 'axios';

export const githubLogin = () => {
  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_REACT_APP_REDIRECT_URL;
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user`;
  window.location.href = authorizeUrl;
};

export const loginCallback = async code => {
  const res = await axios.get(
    `https://api.commitato.site/login/callback?code=${code}`,
  );
  if (res.data.isSuccess) {
    const token = res.data.result.accessToken;
    return token;
  }
};
