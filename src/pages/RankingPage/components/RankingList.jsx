import styled from 'styled-components';

const RankingList = () => {
  return (
    <ListDiv>
      <p>Rank</p>
      <p>User</p>
      <p>Tier</p>
      <p>연속 커밋 횟수</p>
      <p>경험치</p>
    </ListDiv>
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
