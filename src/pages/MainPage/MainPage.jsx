import styled from 'styled-components';

const MainPage = () => {
  return (
    <StyledContainer>
      <MainDiv>COMMITATO</MainDiv>
    </StyledContainer>
  );
};

export default MainPage;

const MainDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.logo};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.orange};
  width: 100%;
  height: 100vh;
`;
