import { styled } from 'styled-components';

const MainPage = () => {
  return <LogoDiv>COMMITATO</LogoDiv>;
};

export default MainPage;

const LogoDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.logo};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;
