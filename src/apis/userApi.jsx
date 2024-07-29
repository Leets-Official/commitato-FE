import axios from 'axios';

export const fetchUserData = async githubId => {
  try {
    const response = await axios.get(
      `http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/user/search?githubId=${githubId}`,
    );
    return response.data.result;
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error);
    return null;
  }
};
