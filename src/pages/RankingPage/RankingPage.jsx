import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { StyledBlack, StyledWhite } from '../MyPage/MyPage';
import line from '../../assets/line.png';
import styled from 'styled-components';

import RankingList from './components/RankingList';
import { useRef, useState } from 'react';

const rankingItems = [
  {
    id: 1,
    rank: 1,
    user: 'githubID1',
    tier: 'CEO 감자',
    commitDay: '7일',
    exp: 120,
  },
  {
    id: 2,
    rank: 2,
    user: 'githubID2',
    tier: 'CEO 감자',
    commitDay: '5일',
    exp: 110,
  },
  {
    id: 3,
    rank: 3,
    user: 'githubID3',
    tier: 'CEO 감자',
    commitDay: '4일',
    exp: 100,
  },
  {
    id: 4,
    rank: 4,
    user: 'githubID4',
    tier: '개발자 감자',
    commitDay: '4일',
    exp: 90,
  },
  {
    id: 5,
    rank: 5,
    user: 'githubID5',
    tier: '개발자 감자',
    commitDay: '4일',
    exp: 80,
  },
];
const RankingPage = () => {
  const [datas, setDatas] = useState(rankingItems);
  return (
    <>
      <Header />
      <StyledBlack>
        <RankingContainer>
          <RankingList datas={datas} />
        </RankingContainer>
      </StyledBlack>
      <Footer />
    </>
  );
};

export default RankingPage;

const RankingContainer = styled(StyledWhite)`
  border-radius: 30px;
  width: 1316px;
  height: 939px;
  background: ${({ theme }) => theme.COLORS.white};
  margin: auto auto;
`;

// const InputDiv = styled.div`
//   position: relative;
//   width: 1100px;
// `;

// const Input = styled.input`
//   &::placeholder {
//     font-family: ${({ theme }) => theme.FONT_FAMILY.main};
//     font-size: ${({ theme }) => theme.FONT_SIZE.medium};
//     color: ${({ theme }) => theme.COLORS.gray[100]};
//   }

//   font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
//   font-size: ${({ theme }) => theme.FONT_SIZE.medium};

//   border: 4px solid ${({ theme }) => theme.COLORS.yellow[100]};
//   border-radius: 49px;
//   width: 100%;
//   padding: 20px 15px 15px 30px;
//   margin: 30px 70px;
// `;

// const InputImg = styled.img`
//   position: absolute;
//   width: 40px;
//   top: 48px;
//   left: 1150px;
// `;
