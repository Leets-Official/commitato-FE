import { useState } from 'react';
import introduceModal from '../../../assets/introduceModal.png';
import Question from '../../../assets/Question.png';
import styled from 'styled-components';

const IntroduceModal = ({ onClose }) => {
  return (
    <StyledModalBackground onClick={onClose}>
      <StyledModalContainer onClick={e => e.stopPropagation()}>
        <StyledModal src={introduceModal} />
        <StyledOverlay>
          <StyledComment>LEVEL</StyledComment>
          <StyledSmall>
            바보 감자 (999점 이하) 그냥 감자 (1000점 이상 14999점 이하)
            <br />
            개발자 감자 (15000점 이상 32999점 이하) CEO 감자 (33000점 이상)
            <br />
          </StyledSmall>
          <StyledComment>EXP</StyledComment>
          <StyledSmall>
            커밋 1회당 5점이 부여
            <br />
            연속 커밋의 경우 기본 보너스 경험치 100점이 부여
            <br />
            연속 커밋 일수가 쌓일 경우 10점씩 추가 부여
          </StyledSmall>
        </StyledOverlay>
      </StyledModalContainer>
    </StyledModalBackground>
  );
};

const IntroduceModalWrapper = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <StyledWrapper>
      <StyledQuestion src={Question} onClick={openModal} />
      {modalOpen && <IntroduceModal onClose={closeModal} />}
    </StyledWrapper>
  );
};

export default IntroduceModalWrapper;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 7%;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const StyledModalContainer = styled.div`
  position: relative;
  width: 700px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.3;
`;

const StyledComment = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.black};
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const StyledSmall = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const StyledQuestion = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
