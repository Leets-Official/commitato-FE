import axios from 'axios';

export const postAuthLogout = async () => {
  const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const data = await axios.post('api/auth/logout', {}, { headers });
    return data;
  } catch (e) {}
};
