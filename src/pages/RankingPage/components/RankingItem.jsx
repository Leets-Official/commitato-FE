import styled from 'styled-components';

const RankingItem = ({ id, rank, user, tier, commitDay, exp }) => {
  return (
    <ItemDiv>
      <span>{rank}</span>
      <span>{user}</span>
      <span>{tier}</span>
      <span>{commitDay}</span>
      <span>{exp}</span>
    </ItemDiv>
  );
};

export default RankingItem;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;
