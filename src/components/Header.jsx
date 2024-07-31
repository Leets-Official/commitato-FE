import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { postAuthLogout } from '../apis/auth/Logout';

const Header = () => {
  const nav = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const home = async () => {
    nav('/');
  };
  const myPage = async () => {
    nav('/my');
  };
  const ranking = async () => {
    nav('/ranking');
  };

  const logout = async () => {
    const res = await postAuthLogout();
    console.log(res); // Detail: 로그아웃 res 응답 확인해보세요.
    if (res.data.isSuccess) {
      // Detail: api 성공 시 되어지는 코드들
      alert('로그아웃이 성공하였습니다.');
      localStorage.removeItem('accessToken'); // 로그아웃 시 토큰 삭제
      setIsLoggedIn(false);
      nav('/'); // 로그인 페이지로 리디렉션
      return;
    }
    // Detail: 오류나면 apis 폴더의 Logout.js 에서 try/catch의 catch문에서 처리되어짐.
  };

  return (
    <StyledHeader>
      <LogoDiv>COMMITATO</LogoDiv>
      <StyledButton onClick={home}>HOME</StyledButton>
      <StyledButton onClick={myPage}>MY PAGE</StyledButton>
      <StyledButton onClick={ranking}>RANKING</StyledButton>
      {isLoggedIn && (
        <StyledLogOutButton onClick={logout}>LOG OUT</StyledLogOutButton>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  padding: 20px;
  z-index: 1;
  width: 100%;
  height: 38px;
  background: #ffffff;
  top: 0px;
`;

const LogoDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;

const StyledButton = styled.h1`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.black};
  }
`;

const StyledLogOutButton = styled.h1`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  margin-left: 68%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.black};
  }
`;
