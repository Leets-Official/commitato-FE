import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const updateCommit = async () => {
  const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.post('api/commit/update', {}, { headers });
  if (res.data.isSuccess) {
    return res.data.result;
  }
};
