import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../apis/UserContext';

const User = () => {
  const { setUserId, error, setError } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/login/test',
        );
        const data = response.data;
        if (data.isSuccess) {
          setUserId(data.result.userId);
        } else {
          setError(data.message);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUserId, setError]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생: {error}</div>;
  return null;
};

export default User;
