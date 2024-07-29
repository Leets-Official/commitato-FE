import { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Login = () => {
  const { setUserData, setError, setAllUserData } = useContext(UserContext);

  useEffect(() => {
    const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
    console.log(
      'Environment variable - VITE_REACT_APP_ACCESS_TOKEN:',
      accessToken,
    );

    if (!accessToken) {
      setError('Access token is missing');
      return;
    }

    localStorage.setItem('accessToken', accessToken);
    console.log('accessToken : ', accessToken);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    console.log(headers);

    axios
      .get('/api/login/github', { headers }) // '/api' 경로로 변경
      .then(response => {
        if (response.data.code === 200) {
          setUserData(response.data.data);
        } else {
          setError(response.data.message);
        }
      })
      .catch(err => {
        setError('An error occurred while fetching the data');
      });
  }, [setUserData, setError, setAllUserData]);

  return null;
};

export default Login;
