import GitHubCalendar from 'react-github-calendar';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import first from '../../img/first.png';
import second from '../../img/second.png';
import third from '../../img/third.png';
import fourth from '../../img/fourth.png';
import line from '../../img/line.png';
import circle from '../../img/circle.png';
import githubChar from '../../img/githubChar.png';
import XpBar from '../../components/XpBar';

function GitHubChart({ githubId }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper>
      {isMounted && (
        <GitHubCalendar
          username={githubId}
          color="#FFCF55"
          showWeekdayLabels
          blockSize={18}
          style={{
            height: '15rem',
            width: '50rem',
            marginLeft: '2.5rem',
          }}
        />
      )}
    </Wrapper>
  );
}

const MyPage = ({
  githubId,
  MyGitHubRanking,
  MyGitHubCont,
  todayCommit,
  totalCommit,
}) => {
  const character = [
    {
      id: 0,
      title: '바보 감자',
      img: first,
    },
    {
      id: 1,
      title: '말하는 감자',
      img: second,
    },
    {
      id: 2,
      title: '개발자 감자',
      img: third,
    },
    {
      id: 3,
      title: 'CEO 감자',
      img: fourth,
    },
  ];

  const selectedCharacterId = 0;

  const selectedCharacter = character.find(
    char => char.id === selectedCharacterId,
  );

  return (
    <StyledBlack>
      <StyledWhite>
        <div>
          <StyledTitle>MY PAGE</StyledTitle>
          <StyledImg src={line} />
          <Wrapper>
            {selectedCharacter && (
              <div key={selectedCharacter.id}>
                <Styledimg src={selectedCharacter.img} />
              </div>
            )}
            <div>
              <StyledName>MyGitHubID{githubId}</StyledName>
              <StyledThree>
                <StyledRanking>Ranking {MyGitHubRanking}위 </StyledRanking>
                <StyledLevel>level {selectedCharacter.title} </StyledLevel>
                <StyledCont>연속 커밋 {MyGitHubCont}일차 </StyledCont>
              </StyledThree>
              <XpBar />
            </div>
          </Wrapper>
          <StyledSubTitle>나의 커밋 농장</StyledSubTitle>
          <StyledImg2 src={line} />
          <StyledDiv>
            <GitHubChart githubId={githubId} />
            <StyledCommit>
              <StyledConnect>
                <StyledArr>TODAY COMMIT</StyledArr>
                <StyledArr3>{todayCommit}5</StyledArr3>
              </StyledConnect>
              <StyledImg3 src={circle} />
              <StyledConnect>
                <StyledArr>TOTAL COMMIT</StyledArr>
                <StyledArr3>{totalCommit}5</StyledArr3>
              </StyledConnect>
              <StyledImg3 src={circle} />
              <StyledGit>
                <StyledImg4 src={githubChar} />
                <StyledArr2>GITHUB</StyledArr2>
                <StyledArr4>{githubId}MyGitHubID</StyledArr4>
              </StyledGit>
            </StyledCommit>
          </StyledDiv>
        </div>
      </StyledWhite>
    </StyledBlack>
  );
};

export default MyPage;

const StyledBlack = styled.div`
  display: flex;
  padding-top: 38px;
  width: 100%;
  height: 1080px;
  background: #000000;
`;

const StyledWhite = styled.div`
  border-radius: 30px;
  width: 1316px;
  height: 735px;
  background: #ffffff;
  margin: auto auto;
`;

const StyledTitle = styled.div`
  margin-left: 4.5%;
  margin-top: 3.5%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 48px;
`;

const StyledImg = styled.img`
  margin-left: 4%;
  width: 90%;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
`;

const StyledSubTitle = styled.div`
  margin-left: 7%;
  margin-top: 1%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 20px;
`;

const StyledImg2 = styled.img`
  margin-left: 5%;
  width: 62%;
`;

const StyledImg3 = styled.img`
  margin-top: 2%;
  margin-left: 7%;
  width: 70%;
`;

const StyledGit = styled.div`
  display: flex;
`;

const StyledImg4 = styled.img`
  margin-top: 2%;
  margin-left: 10%;
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

const Styledimg = styled.img`
  width: 174px;
  height: 209px;
  object-fit: cover;
  margin-left: 20%;
`;

const StyledArr = styled.div`
  margin-left: 10%;
  margin-top: 6%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const StyledArr2 = styled.div`
  margin-left: 2%;
  margin-top: 3.2%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 28px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledCommit = styled.div`
  margin-top: 2%;
`;

const StyledThree = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 3%;
  width: 372px;
  height: 22px;
  object-fit: cover;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  justify-content: space-between;
`;
const StyledName = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[400]};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin-left: 5%;
  // margin-top: 5%;
`;

const StyledRanking = styled.div``;

const StyledLevel = styled.div``;

const StyledCont = styled.div``;

const StyledArr3 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 50px;
  margin-left: 20%;
  margin-top: 2%;
`;

const StyledConnect = styled.div`
  display: flex;
`;

const StyledArr4 = styled.div`
  margin-left: 12%;
  margin-top: 4%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: 18px;
`;
