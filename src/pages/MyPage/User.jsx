import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../apis/UserContext';

const User = () => {
  const {
    userId,
    setUserId,
    setUserName,
    setUserExp,
    setUserTierName,
    setCharacterUrl,
    setUserConsecutiveCommitDays,
    setUserTotalCommitCount,
    setUserTodayCommitCount,
    error,
    setError,
  } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.log('No user ID, skipping fetchUserData');
        return;
      }
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        setError('Access token is missing');
        return;
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      setLoading(true);
      setError(null);

      try {
        console.log('Fetching commit data for user ID:', userId);
        await axios.post('http://localhost:8080/commit/update', { headers });

        console.log('Fetching user data for ID:', userId);

        const response = await axios.get(
          'http://localhost:8080/user/' + userId,
          { headers },
        );

        const data = response.data;
        console.log('User data response:', data); // 응답 데이터 확인
        if (data.isSuccess) {
          setUserName(data.result.username);
          setUserExp(data.result.userExp);
          setUserTierName(data.result.userTierName);
          setCharacterUrl(data.result.userCharacterUrl);
          setUserConsecutiveCommitDays(data.result.userConsecutiveCommitDays);
          setUserTodayCommitCount(data.result.userTodayCommitCount);
          setUserTotalCommitCount(data.result.userTotalCommitCount);
        } else {
          setError(`Server error: ${data.message}`);
        }
      } catch (e) {
        console.error('Error fetching user data:', e.message); // 에러 메시지 확인
        setError(`Error fetching user data: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [
    userId,
    setUserName,
    setUserExp,
    setUserTierName,
    setCharacterUrl,
    setUserConsecutiveCommitDays,
    setUserTodayCommitCount,
    setUserTotalCommitCount,
    setError,
  ]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생: {error}</div>;
  return null;
};

export default User;
