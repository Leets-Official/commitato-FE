import GitHubCalendar from 'react-github-calendar';
import { styled } from 'styled-components';
import first from '../../img/first.png';
import second from '../../img/second.png';
import third from '../../img/third.png';
import fourth from '../../img/fourth.png';
import line from '../../img/line.png';
import React, { useState, useEffect } from 'react';

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
          blockSize={16}
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

const MyPage = ({ githubId }) => {
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
                <img src={selectedCharacter.img} />
                <h1>{selectedCharacter.title}</h1>
              </div>
            )}
          </Wrapper>
          <StyledDiv>
            <GitHubChart githubId={githubId} />
            <StyledArr>TODAY COMMIT</StyledArr>
            <StyledArr>TOTAL COMMIT</StyledArr>
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
  margin-left: 2.5%;
  margin-top: 3.5%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 48px;
`;

const StyledImg = styled.img`
  margin-left: 2%;
  width: 95%;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
`;

const StyledArr = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
`;

const StyledDiv = styled.div`
  display: flex;
`;
