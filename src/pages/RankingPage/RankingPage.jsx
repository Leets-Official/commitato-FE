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

const RankingPage = () => {
  return (
    <>
      <Header />
      <StyledBlack>
        <RankingContainer>
          <StyledTitle>Ranking</StyledTitle>
          <StyledImg src={line} />
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
