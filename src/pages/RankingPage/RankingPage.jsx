import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  StyledBlack,
  StyledImg,
  StyledTitle,
  StyledWhite,
} from '../MyPage/MyPage';
import line from '../../assets/line.png';
import styled from 'styled-components';
import Search from '../../assets/Search.png';
import RankingList from './components/RankingList';
import { useRef, useState } from 'react';
const RankingPage = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header />
      <StyledBlack>
        <RankingContainer>
          <StyledTitle>Ranking</StyledTitle>
          <StyledImg src={line} />
          <InputDiv>
            <Input
              value={search}
              onChange={onChangeSearch}
              placeholder="Search Here"
            />
            <InputImg src={Search} alt="Search" />
          </InputDiv>
          <RankingList />
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

const InputDiv = styled.div`
  position: relative;
  width: 1100px;
`;

const Input = styled.input`
  &::placeholder {
    font-family: ${({ theme }) => theme.FONT_FAMILY.main};
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    color: ${({ theme }) => theme.COLORS.gray[100]};
  }

  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};

  border: 4px solid ${({ theme }) => theme.COLORS.yellow[100]};
  border-radius: 49px;
  width: 100%;
  padding: 20px 15px 15px 30px;
  margin: 30px 70px;
`;

const InputImg = styled.img`
  position: absolute;
  width: 40px;
  top: 48px;
  left: 1150px;
`;
