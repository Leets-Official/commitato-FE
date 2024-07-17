import styled, { keyframes } from 'styled-components';
import { ScrollAnimationContainer } from '../../components/ScrollAnimationContainer';
import { motion } from 'framer-motion';
import comment1 from '../../assets/comment1.png';
import comment2 from '../../assets/comment2.png';
import stupid_potato from '../../assets/stupid_potato.png';
import talking_potato from '../../assets/talking_potato.png';
import developer_potato from '../../assets/developer_potato.png';
import ceo_potato from '../../assets/ceo_potato.png';
const MainPage = () => {
  return (
    <StyledContainer>
      <MainDiv>COMMITATO</MainDiv>

      <Box>
        <SDiv>
          <img
            src="src\assets\about_commitato.png"
            alt="animated_bar"
            width="120px"
          />
          <div>ABOUT COMMITATO</div>
          <img
            src="src\assets\about_commitato.png"
            alt="animated_bar"
            width="120px"
          />
        </SDiv>
      </Box>

      <ScrollAnimationContainer>
        <img src={comment1} width="720px" />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <img src={comment2} width="720px" />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <ImgWrapper src={stupid_potato} width="240px" />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <ImgWrapper src={talking_potato} width="240px" />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <ImgWrapper src={developer_potato} width="240px" />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <ImgWrapper src={ceo_potato} width="240px" />
      </ScrollAnimationContainer>
    </StyledContainer>
  );
};

export default MainPage;

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.yellow[100]};
  width: 100%;
  height: 100vh;
`;

const MainDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Box = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.larger};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  &.frame-in {
    animation: ${frameInAnimation}2s forwards;
  }
`;

const SDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.larger};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.yellow[100]};
`;

const ImgWrapper = styled.img`
  position: relative;
  left: 0;
`;
