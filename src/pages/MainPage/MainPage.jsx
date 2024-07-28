import styled, { css, keyframes } from 'styled-components';
// import { ScrollAnimationContainer } from '../../components/ScrollAnimationContainer';
import comment1 from '../../assets/comment1.png';
import comment2 from '../../assets/comment2.png';
import comment3 from '../../assets/comment3.png';
import comment4 from '../../assets/comment4.png';
import stupid_potato_comment from '../../assets/stupid_potato_comment.png';
import talking_potato_comment from '../../assets/talking_potato_comment.png';
import developer_potato_comment from '../../assets/developer_potato_comment.png';
import ceo_potato_comment from '../../assets/ceo_potato_comment.png';
import stupid_potato from '../../assets/stupid_potato.png';
import talking_potato from '../../assets/talking_potato.png';
import developer_potato from '../../assets/developer_potato.png';
import ceo_potato from '../../assets/ceo_potato.png';
import { ParallaxText } from './components/ParallaxText';
// import AnimatedText from './components/AnimatedText';
import Button from '../../components/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../../components/Header';
import React, { useEffect, useRef, useState } from 'react';
import { HowDiv1, HowDiv2, HowDiv3 } from '../MainPage/components/AnimatedText';
import MainFooter from './components/MainFooter';
import ranking_img from '../../assets/ranking_img.png';
import commitgrass from '../../assets/commitgrass.png';

const TranslateAnimation = keyframes`
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
  
    100% {
      opacity: 1;
      transform:translateX(0%)
    }
  `;

const textSlideUp = keyframes`
    0%{
      opacity: 0;
      transform: translateY(100%);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }

  `;

const fadeIn = keyframes`
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          `;
const textVariants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 200,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.9,
    },
  },
};

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onClickToGithub = () => {
    window.open('https://github.com/login');
  };

  const onClickToBalloon = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const divRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    });

    divRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      divRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <CenterDiv>
          <MainDiv>COMMITATO</MainDiv>
          <Button onClick={onClickToGithub} label="Login with Github" />
        </CenterDiv>

        <ParallaxText baseVelocity={-7}>
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

        <FlexContainer>
          <AnimatedDiv ref={divRefs.current[0]}>
            <Comment1Img src={comment1} alt="comment1" />
          </AnimatedDiv>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={textVariants}
            exit={{ opacity: 0 }}
          >
            <HowDiv1>HOW?</HowDiv1>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={textVariants}
            exit={{ opacity: 0 }}
          >
            <HowDiv2>HOW?</HowDiv2>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={textVariants}
            exit={{ opacity: 0 }}
          >
            <HowDiv3>HOW?</HowDiv3>
          </motion.div>

          <Comment2ImgWrapper>
            <AnimatedDiv ref={divRefs.current[1]}>
              <Comment2Img src={comment2} alt="comment2" />
            </AnimatedDiv>
          </Comment2ImgWrapper>

          {/*bg: black*/}
          <BgDiv>
            <PotatoWrapper>
              <FlexBox>
                <PotatoDiv1
                  src={stupid_potato}
                  alt="stupid_potato"
                  onClick={() => onClickToBalloon(0)}
                />
                <BalloonImg
                  src={stupid_potato_comment}
                  alt="balloon"
                  active={activeIndex === 0}
                />
              </FlexBox>
              <StyledText>
                바보 감자는 초보 단계의 감자에요. 아직은 많은 것을 배우고 익혀야
                하는 단계입니다. (포인트 범위: 0-99 포인트)
              </StyledText>
            </PotatoWrapper>

            <PotatoWrapper>
              <FlexBox>
                <BalloonImg
                  src={talking_potato_comment}
                  alt="balloon"
                  active={activeIndex === 1}
                />
                <PotatoDiv2
                  src={talking_potato}
                  alt="talking_potato"
                  onClick={() => onClickToBalloon(1)}
                />
              </FlexBox>
              <StyledText>
                말하는 감자는 어느 정도 경험을 쌓은 감자에요. 이제 기본적인
                대화를 할 수 있으며, 프로젝트에 대한 이해도가 조금 더
                높아졌습니다. (포인트 범위: 100-499 포인트)
              </StyledText>
            </PotatoWrapper>

            <PotatoWrapper>
              <FlexBox>
                <PotatoDiv3
                  src={developer_potato}
                  alt="developer_potato"
                  onClick={() => onClickToBalloon(2)}
                />
                <BalloonImg
                  src={developer_potato_comment}
                  alt="balloon"
                  active={activeIndex === 2}
                />
              </FlexBox>
              <StyledText>
                개발자 감자는 충분한 경험을 통해 개발에 익숙해진 감자입니다.
                다양한 기술과 도구를 능숙하게 다룰 수 있습니다. (포인트 범위:
                500-999 포인트)
              </StyledText>
            </PotatoWrapper>

            <PotatoWrapper>
              <FlexBox>
                <BalloonImg
                  src={ceo_potato_comment}
                  alt="balloon"
                  active={activeIndex === 3}
                />
                <PotatoDiv4
                  src={ceo_potato}
                  alt="ceo_potato"
                  onClick={() => onClickToBalloon(3)}
                />
              </FlexBox>
              <StyledText>
                CEO 감자는 커밋테이토의 최정상 단계의 감자입니다. 이제
                프로젝트를 이끌고, 팀을 관리하는 능력을 갖추었습니다. 다른
                감자들에게 영감을 주는 리더입니다. (포인트 범위: 1000 포인트
                이상)
              </StyledText>
            </PotatoWrapper>
          </BgDiv>
          {/*bg: black 에서 yellow로 그라데이션 */}

          <Comment3ImgWrapper>
            <AnimatedDiv ref={divRefs.current[2]}>
              <Comment3Img src={comment3} alt="comment3" />
            </AnimatedDiv>
            <AnimatedImg>
              <img src={commitgrass} alt="commitgrass" />
            </AnimatedImg>
          </Comment3ImgWrapper>

          {/*bg: yellow */}
          <AnimatedDiv ref={divRefs.current[3]}>
            <Comment4Img src={comment4} alt="comment4" />
          </AnimatedDiv>
          <AnimatedImg>
            <img src={ranking_img} alt="ranking_img" />
          </AnimatedImg>
        </FlexContainer>

        <TextDiv>
          <AnimatedText>
            <p>COMMITATO와 함께하는 1일 1커밋,</p>
            <p>지금 시작하세요.</p>
          </AnimatedText>
        </TextDiv>
        <MainFooter />
      </StyledContainer>
    </>
  );
};

export default MainPage;

const StyledContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.COLORS.yellow[100]};
  width: 100%;
  min-height: calc(100vh - 288px);
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const Comment1Img = styled.img`
  padding-left: 50px;
`;
const Comment2Img = styled.img`
  position: relative;
  left: 830px;
  top: 1000px;
  /* padding-bottom: 100px; */
`;

const Comment2ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.yellow[100]},
    ${({ theme }) => theme.COLORS.black}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Comment3ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.black},
    ${({ theme }) => theme.COLORS.yellow[100]}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Comment3Img = styled.img`
  position: relative;
  left: 100px;
  top: 1300px;
`;
const Comment4Img = styled.img`
  position: relative;
  left: 840px;
  top: 2000px;
`;

const AnimatedDiv = styled.div`
  /* opacity: 0;
  transform: translateX(-100%);
  will-change: transform, opacity; */
  &.animate {
    animation: ${TranslateAnimation} 2s forwards;
  }

  margin: 50px 0;
`;

const BgDiv = styled.div`
  background-color: #000000;
  position: relative;
`;

const PotatoDiv1 = styled.img``;

const PotatoDiv2 = styled.img`
  /* position: relative;
  top: 2200px;
  left: 480px; */
`;
const PotatoDiv3 = styled.img`
  /* position: relative;
  top: 3200px;
  right: 1250px; */
`;
const PotatoDiv4 = styled.img`
  /* position: relative;
  top: 4000px;
  right: 30px; */
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-left: 100px;
  margin-right: 100px;
  cursor: pointer;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.COLORS.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
`;
const BalloonImg = styled.img`
  display: ${({ active }) => (active ? 'block' : 'none')};
  animation: ${({ active }) =>
    active &&
    css`
      ${fadeIn} 0.3s ease-in-out
    `};
`;

const PotatoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
`;
const TextDiv = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.yellow[100]},
    ${({ theme }) => theme.COLORS.black} 70%
  );
  height: 100vh;
  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6000px;
  margin-bottom: 400px;
`;

const AnimatedText = styled.div`
  animation: ${textSlideUp} 2s infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const AnimatedImg = styled.div`
  animation: ${textSlideUp} 2s infinite;
  width: 500px;
  height: 343px;
  position: relative;
  top: 1500px;
`;
