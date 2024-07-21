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
const RankingPage = () => {
  const onChange = () => {};
  return (
    <>
      <Header />
      <StyledBlack>
        <RankingContainer>
          <StyledTitle>Ranking</StyledTitle>
          <StyledImg src={line} />
          <InputDiv>
            <Input type="text" onChange={onChange} placeholder="Search Here" />
            <InputImg src={Search} alt="Search" />
          </InputDiv>
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
  height: 900px;
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
  border: 4px solid ${({ theme }) => theme.COLORS.yellow[100]};
  border-radius: 49px;
  width: 100%;
  padding: 20px;
  margin: 30px 70px;
`;

const InputImg = styled.img`
  position: absolute;
  width: 40px;
  top: 40px;
  left: 1150px;
  margin: 0;
`;
