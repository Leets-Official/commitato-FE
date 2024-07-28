import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RankingItem = ({ id, rank, user, tier, commitDay, exp }) => {
  const nav = useNavigate();
  const onClickToMyPage = () => {
    nav('/my');
  };
  return (
    <ItemDiv>
      <span>{rank}</span>
      <UserItem onClick={onClickToMyPage}>{user}</UserItem>
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
  justify-content: space-between;
  padding: 15px 80px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const UserItem = styled.span`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.brown[100]};
  }
`;
