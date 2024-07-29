import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../apis/UserContext';

const User = () => {
  const {
    setUserExp,
    setUserTierName,
    setUserConsecutiveCommitDays,
    setUserTotalCommitCount,
    setUserTodayCommitCount,
    setUserId,
    error,
    setError,
  } = useContext(UserContext);
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

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/user/search?githubId=woneeeee',
        );
        const data = response.data;
        if (data.isSuccess) {
          setUserExp(data.result.userExp);
          setUserTierName(data.result.userTierName);
          setUserConsecutiveCommitDays(data.result.userConsecutiveCommitDays);
          setUserTodayCommitCount(data.result.userTodayCommitCount);
          setUserTotalCommitCount(data.result.userTotalCommitCount);
        } else {
          setError(`Server error: ${data.message}`);
        }
      } catch (e) {
        setError(`Error fetching user data: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [
    setUserExp,
    setUserTierName,
    setUserConsecutiveCommitDays,
    setUserTodayCommitCount,
    setUserTotalCommitCount,
    setError,
  ]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생: {error}</div>;
  return null;
};

export default User;
