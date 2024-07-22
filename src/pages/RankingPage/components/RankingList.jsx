import styled from 'styled-components';
import RankingItem from './RankingItem';
import { StyledImg, StyledTitle } from '../../MyPage/MyPage';
import line from '../../../assets/line.png';
import Search from '../../../assets/Search.png';
import { useState } from 'react';

const RankingList = ({ datas }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') return datas;
    return datas.filter(data =>
      data.user.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredDatas = getFilteredData();
  return (
    <>
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

      <ListContainer>
        <div>Rank</div>
        <div>User</div>
        <div>Tier</div>
        <div>연속 커밋 횟수</div>
        <div>경험치</div>
      </ListContainer>
      <div>
        {filteredDatas.map(item => {
          return <RankingItem key={item.id} {...item} />;
        })}
      </div>

      <StyledImg src={line} />
    </>
  );
};

export default RankingList;

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

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 100px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.gray[200]};
`;
