import styled, { css, keyframes } from 'styled-components';
import comment1 from '../../assets/comment1.png';
import comment2 from '../../assets/comment2.png';
import comment3 from '../../assets/comment3.png';
import comment4 from '../../assets/comment4.png';
import { potatoes } from '../../utils/constants';
import { ParallaxText } from './components/ParallaxText';
import AnimatedText from './components/AnimatedText';
import Button from '../../components/Button';
<<<<<<< HEAD
import Header from '../../components/Header';
import Footer from '../../components/Footer';
=======
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

const SlideUp = keyframes`
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
>>>>>>> f92c3a333f9951f2d753eb2cda5ce545ce479d76

const MainPage = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const onClickToGithub = () => {
    window.open('https://github.com/login');
  };

  const onClickToBalloon = index => {
    setActiveIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index],
    );
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
<<<<<<< HEAD
      <StyledContainer>
        <CenterDiv>
          <MainDiv>COMMITATO</MainDiv>
          <Button onClick={onCLickToGithub} label="Login with Github" />
=======
      <Header />
      <StyledContainer>
        <CenterDiv>
          <MainDiv>COMMITATO</MainDiv>
          <Button onClick={onClickToGithub} label="Login with Github" />
>>>>>>> f92c3a333f9951f2d753eb2cda5ce545ce479d76
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

<<<<<<< HEAD
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

        <Comment3Img src={comment3} alt="comment3" />
        <Comment4Img src={comment4} alt="comment4" />
=======
        <FlexContainer>
          <AnimatedDiv ref={divRefs.current[0]}>
            <Comment1Img src={comment1} alt="comment1" />
          </AnimatedDiv>
          <AnimatedText />

          <Comment2ImgWrapper>
            <AnimatedDiv ref={divRefs.current[1]}>
              <Comment2Img src={comment2} alt="comment2" />
            </AnimatedDiv>
          </Comment2ImgWrapper>

          {/*bg: black*/}
          <BgDiv>
            {potatoes.map((potato, index) => (
              <PotatoWrapper key={potato.id}>
                <FlexBox>
                  <img
                    src={potato.img}
                    alt={potato.img}
                    onClick={() => onClickToBalloon(index)}
                  />
                  <BalloonImg
                    src={potato.comment}
                    alt={`balloon_${potato.id}`}
                    active={activeIndexes.includes(index)}
                  />
                </FlexBox>
                <StyledText>{potato.text}</StyledText>
              </PotatoWrapper>
            ))}
          </BgDiv>
          {/*bg: black 에서 yellow로 그라데이션 */}

          <Comment3ImgWrapper>
            <AnimatedDiv ref={divRefs.current[2]}>
              <Comment3Img src={comment3} alt="comment3" />
            </AnimatedDiv>

            <AnimatedImg>
              <CommitGrassImg src={commitgrass} alt="commitgrass" />
              <StyledComment>
                마이 페이지에서 나의 커밋 현황을 확인할 수 있는 달력 기능을
                해요. 꾸준한 커밋으로 당신의 커밋 농장을 황금색 감자로 가득
                채워보세요!
              </StyledComment>
            </AnimatedImg>
          </Comment3ImgWrapper>

          {/*bg: yellow */}
          <Comment4ImgWrapper>
            <AnimatedDiv ref={divRefs.current[3]}>
              <Comment4Img src={comment4} alt="comment4" />
            </AnimatedDiv>
            <AnimatedImg>
              <RankingImg src={ranking_img} alt="ranking_img" />
              <StyledComment2>
                <div>
                  랭킹에서 다른 유저와 자신의 순위, 티어, 연속 커밋 횟수, 획득
                  경험치 등을 확인할 수 있어요.
                </div>
                <div>
                  만약 특정 유저의 정보가 궁금하다면, 깃허브 아이디를 검색하여
                  확인할 수 있어요.
                </div>
                <div>친구와 함께 순위를 겨루며 커밋테이토를 즐기세요!</div>
              </StyledComment2>
            </AnimatedImg>
          </Comment4ImgWrapper>
        </FlexContainer>

        <TextDiv>
          <SlideUpText>
            <p>COMMITATO와 함께하는 1일 1커밋,</p>
            <p>지금 시작하세요.</p>
          </SlideUpText>
        </TextDiv>
        <MainFooter />
>>>>>>> f92c3a333f9951f2d753eb2cda5ce545ce479d76
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
const Comment2Img = styled.img``;

const Comment2ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.yellow[100]},
    ${({ theme }) => theme.COLORS.black}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 300px;
  padding-right: 100px;
`;
const Comment3ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.black},
    ${({ theme }) => theme.COLORS.yellow[100]}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Comment4ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: flex-end;
`;
const Comment3Img = styled.img`
  position: relative;
  margin-left: 100px;
  top: 1300px;
`;
const Comment4Img = styled.img`
  position: relative;
  padding-right: 100px;
  top: 1700px;
`;

const AnimatedDiv = styled.div`
  &.animate {
    animation: ${TranslateAnimation} 2s forwards;
  }

  margin: 50px 0;
`;

const BgDiv = styled.div`
  background-color: ${({ theme }) => theme.COLORS.black};
  position: relative;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
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

const PotatoImg1 = styled.img``;

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
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  height: 100vh;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6000px;
  margin-bottom: 400px;
`;

const SlideUpText = styled.div`
  animation: ${SlideUp} 2s infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const AnimatedImg = styled.div`
  animation: ${SlideUp} 2s 1s infinite;
`;
const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const CommitGrassImg = styled.img`
  width: 1316px;
  height: 343px;
  margin-left: 160px;
  position: relative;
  top: 1500px;
  cursor: pointer;
`;

const RankingImg = styled.img`
  position: relative;
  top: 1800px;
  padding-right: 160px;
  cursor: pointer;
`;

const StyledComment = styled.div`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  position: relative;
  top: 1520px;
  left: 160px;
`;

const StyledComment2 = styled(StyledComment)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
  top: 1850px;
  margin-right: 330px;
`;
