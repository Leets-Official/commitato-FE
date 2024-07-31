import { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Login = () => {
  const { setUserData, setError, setAllUserData, setUserId } =
    useContext(UserContext);

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
      .get('api/login/test', { headers })
      .then(response => {
        console.log('Login response:', response.data);
        if (response.data.isSuccess) {
          // isSuccess로 응답 상태 확인
          setUserData(response.data.result); // 데이터 저장
          setUserId(response.data.result.userId);
        } else {
          setError(response.data.message); // 오류 메시지 설정
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError('An error occurred while fetching the data');
      });
  }, [setUserData, setError, setAllUserData, setUserId]);

  return null;
};

export default Login;
