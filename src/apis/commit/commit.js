import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const updateCommit = async () => {
  // const accessToken = localStorage.getItem('accessToken');
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5ZWNoYW4ta2ltIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTcyMjQ1MTMwMX0.uRqdzFihvqUMqrH4xN2MinFEEVCq6wr3IsDAnpUFY87p6dIitbGLMjAAmGVCo0XEDuTlR6MY5zFgdQLr4DAYWA';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.post('api/commit/update', {}, { headers });
  if (res.data.isSuccess) {
    return res.data.result;
  }
};
