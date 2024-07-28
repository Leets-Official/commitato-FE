import styled from 'styled-components';
import footer from '../../../assets/footer.png';

const MainFooter = () => {
  return (
    <Wrapper>
      <LogoDiv>
        COMMITATO
        <Img
          src={footer}
          onClick={() => {
            window.open(
              'https://github.com/Leets-Official/commitato-FE',
              '_blank',
            );
          }}
        />
      </LogoDiv>

      <ContentWrapper>
        <StyledDiv>
          <div>대표 | 가천대학교 Leets 동아리 내 commitato 팀</div>
          <div>사이트명 | Commitato </div>
        </StyledDiv>
        <div>
          주소 | 가천대학교 글로벌캠퍼스 : (13120) 경기도 성남시 수정구 성남대로
          1342
        </div>
        <div>
          본 사이트에 게재된 개인 정보 및 작업물의 무단 도용을 금합니다.
        </div>
        <div>Copyright 2024. Commitato all rights reserved.</div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainFooter;

const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.COLORS.black};
  justify-content: center;
  text-align: center;
  position: relative;
  top: 200px;
`;

const ContentWrapper = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const LogoDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
