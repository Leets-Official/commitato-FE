import axios from 'axios';
import { UserContext } from '../UserContext';

export const postAuthLogout = async () => {
  const { setError } = useContext(UserContext);

  const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const data = await axios.post('api/auth/logout', {}, { headers });
  } catch (e) {
    setError('로그아웃 중 오류가 발생하였습니다.');
  }

  return data;
};
