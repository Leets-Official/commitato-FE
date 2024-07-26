import { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

const useLogInSuccess = () => {
  const { setUserData, setError, setAllUserData } = useContext(UserContext);

  useEffect(() => {
    const accessToken = import.meta.env.REACT_APP_ACCESS_TOKEN;
    console.log('Environment variable - REACT_APP_ACCESS_TOKEN:', accessToken);
    if (!accessToken) {
      setError('Access token is missing');
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .get(
        'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/login/github',
        { headers },
      )
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
};

export default useLogInSuccess;
