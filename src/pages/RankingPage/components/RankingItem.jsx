import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RankingItem = ({ id, name, username, email, phone }) => {
  const nav = useNavigate();
  const onClickToMyPage = () => {
    nav('/my');
  };
  return (
    <ItemDiv>
      <span>{id}</span>
      <UserItem onClick={onClickToMyPage}>{name}</UserItem>
      <span>{username}</span>
      <span>{email}</span>
      <span>{phone}</span>
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
  font-size: 14px;
`;

const UserItem = styled.span`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.brown[100]};
  }
`;
