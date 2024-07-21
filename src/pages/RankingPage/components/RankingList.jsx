import styled from 'styled-components';
import RankingItem from './RankingItem';

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

const RankingList = () => {
  return (
    <>
      <ListDiv>
        <p>Rank</p>
        <p>User</p>
        <p>Tier</p>
        <p>연속 커밋 횟수</p>
        <p>경험치</p>
      </ListDiv>
      <div>
        {rankingItems.map(item => {
          return <RankingItem key={item.id} {...item} />;
        })}
      </div>
      <RankingItem />
    </>
  );
};

export default RankingList;

const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 100px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.gray[200]};
`;
