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
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const onCLickToGithub = () => {
    window.open('https://github.com/login');
  };
  return (
    <StyledContainer>
      <CenterDiv>
        <MainDiv>COMMITATO</MainDiv>
        <Button onClick={onCLickToGithub} label="Login with Github" />
      </CenterDiv>

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

      <div>
        <img src={comment1} alt="comment1" />
        <AnimatedText />
      </div>

      <CommentImg src={comment2} alt="comment2" />

      <PotatoDiv1 src={stupid_potato} alt="stupid_potato" />
      <PotatoDiv2 src={talking_potato} alt="talking_potato" />
      <PotatoDiv3 src={developer_potato} alt="developer_potato" />
      <PotatoDiv4 src={ceo_potato} alt="ceo_potato" />

      <TextDiv>
        <p>COMMITATO와 함께하는 1일 1커밋,</p>
        <p>지금 시작하세요.</p>
      </TextDiv>
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

const CommentImg = styled.img`
  position: relative;
  left: 840px;
  top: 1000px;
`;

const PotatoDiv1 = styled.img`
  position: absolute;
  left: 200px;
  top: 3500px;
`;

const PotatoDiv2 = styled.img`
  position: relative;
  top: 2200px;
  left: 480px;
`;
const PotatoDiv3 = styled.img`
  position: relative;
  top: 3200px;
  right: 1250px;
`;
const PotatoDiv4 = styled.img`
  position: relative;
  top: 4000px;
  right: 30px;
`;

const TextDiv = styled.div`
  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  top: 5000px;
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
