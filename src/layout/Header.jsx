import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();

  const home = async () => {
    nav('/home');
  };
  const myPage = async () => {
    nav('/my');
  };
  const ranking = async () => {
    nav('/ranking');
  };

  return (
    <StyledHeader>
      <LogoDiv>COMMITATO</LogoDiv>
      <StyledButton onClick={home}>HOME</StyledButton>
      <StyledButton onClick={myPage}>MY PAGE</StyledButton>
      <StyledButton onClick={ranking}>RANKING</StyledButton>
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
  margin-top: 15px;
`;
