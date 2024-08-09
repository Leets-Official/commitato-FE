// import axios from 'axios';

// const clientId = 'Iv23lil2Miq3YxcLJLER';
// const redirectUrl = 'https://www.commitato.site/login';
// const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

// const githubLogin = () => {
//   const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID;

//   onclick = () => {
//     window.location.assign(
//       `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
//     );
//   };
// const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
// const redirectUrl = import.meta.env.VITE_REACT_APP_REDIRECT_URL;
// const authorizeUrl =
//   'https://github.com/login/oauth/authorize?client_id=Iv23liJDHSa72tWCP7LX&redirect_uri=https://commitato.site/login/callback&scope=user';
// const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user`;
// window.location.href = authorizeUrl;
// window.location.href = githubURL;
// };

// export const loginCallback = async code => {
//   const res = await axios.get(
//     `https://api.commitato.site/login/callback?code=${code}`,
//   );
//   if (res.result.isSuccess) {
//     const token = res.result.accessToken;
//     console.log(token);
//     return token;
//   }
// };

// export default githubLogin;
// export default loginCallback;

import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { GithubButton } from '../../pages/MainPage/MainPage';
import axios from 'axios';

const Home = () => <GithubButton />;

const Callback = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [hasRedirected, setHasRedirected] = useState(false); // 추가된 상태

  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(search).get('code');
      if (code) {
        try {
          const response = await axios.get('api/login/callback', {
            params: { code },
          });
          console.log('Response:', response.data);
          const { accessToken, refreshToken } = response.data.result;
          localStorage.setItem('ACCESS_TOKEN_KEY', accessToken);
          localStorage.setItem('REFRESH_TOKEN_KEY', refreshToken);
          console.log('Tokens:', accessToken, refreshToken);

          // Set the tokens to state for displaying
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          setHasRedirected(true); // 리다이렉트 플래그 설정
        } catch (err) {
          console.error('Error fetching tokens:', err);
          setError('Failed to fetch tokens');
        }
      } else {
        setError('Authorization code not found');
      }
      setLoading(false);
    };

    fetchToken();
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Authenticated successfully!</h1>
      <p>
        <strong>Access Token:</strong> {accessToken}
      </p>
      <p>
        <strong>Refresh Token:</strong> {refreshToken}
      </p>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Callback />} />
    </Routes>
  </Router>
);

export default App;
