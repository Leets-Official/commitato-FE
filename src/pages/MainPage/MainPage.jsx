import styled, { keyframes } from 'styled-components';
// import { ScrollAnimationContainer } from '../../components/ScrollAnimationContainer';
import comment1 from '../../assets/comment1.png';
import comment2 from '../../assets/comment2.png';
import stupid_potato from '../../assets/stupid_potato.png';
import talking_potato from '../../assets/talking_potato.png';
import developer_potato from '../../assets/developer_potato.png';
import ceo_potato from '../../assets/ceo_potato.png';
import { ParallaxText } from './components/ParallaxText';
import AnimatedText from './components/AnimatedText';

const MainPage = () => {
  return (
    <StyledContainer>
      <MainDiv>COMMITATO</MainDiv>

      <ParallaxText baseVelocity={-10}>
        <svg
          width="150"
          height="48"
          viewBox="0 0 178 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 26L173 26"
            stroke="#333333"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle
            cx="89"
            cy="26"
            r="21"
            fill="white"
            stroke="black"
            strokeWidth="10"
          />
        </svg>
        &nbsp; &nbsp;ABOUT &nbsp; &nbsp; COMMITATO
      </ParallaxText>

      <section>
        <img src={comment1} alt="comment1" />
        <AnimatedText />
      </section>

      <img src={stupid_potato} alt="stupid_potato" />
      <img src={talking_potato} alt="talking_potato" />
      <img src={developer_potato} alt="developer_potato" />
      <img src={ceo_potato} alt="ceo_potato" />
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
  font-size: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 320px;
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

const HowDiv1 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 148px;
  color: ${({ theme }) => theme.COLORS.black};
  position: relative;
  top: 50px;
  left: 500px;
`;

const HowDiv2 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  top: 250px;
  left: 900px;
`;
const HowDiv3 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.yellow[200]};
  top: 400px;
  left: 1400px;
`;
