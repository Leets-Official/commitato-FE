import { styled } from 'styled-components';

const MyPage = () => {
  return (
    <StyledBlack>
      <StyledWhite>
        <title>MY PAGE</title>
      </StyledWhite>
    </StyledBlack>
  );
};

export default MyPage;

const StyledBlack = styled.div`
  width: 1920px;
  height: 1080px;
  background: #000000;
`;

const StyledWhite = styled.div`
  width: 1316px;
  height: 735px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
