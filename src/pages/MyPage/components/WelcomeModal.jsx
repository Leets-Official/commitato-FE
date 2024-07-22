import Modal from 'react-modal';
import styled from 'styled-components';
import close from '../../../assets/close.png';
import Button from '../../../components/Button';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const WelcomeModal = ({ githubId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const nav = useNavigate();

  const onClickToMyPage = async () => {
    nav('/my');
  };

  return (
    <>
      <div>
        <StyledDiv>
          {modalOpen && (
            <StyledModal
              ref={modalBackground}
              onClick={e => {
                if (e.target === modalBackground.current) {
                  setModalOpen(false);
                }
              }}
            >
              <StyledContent>
                <StyledClose onClick={() => setModalOpen(false)} src={close} />
                <StyledComment>
                  <br />
                  {githubId}githubId님, Commitato에 오신 걸 환영해요! <br />
                  <br />
                  앞으로 Commitato와 함께 1일 1커밋을 실천하며 꾸준히
                  성장해봐요!
                  <br />
                  <br />
                  <br />
                </StyledComment>
                <Button onClick={onClickToMyPage} label="마이페이지 바로가기" />
                <br />
                <br />
                <br />
              </StyledContent>
            </StyledModal>
          )}
        </StyledDiv>
      </div>
    </>
  );
};

export default WelcomeModal;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 263px;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 30px 30px;
`;

const StyledContent = styled.div``;

const StyledComment = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const StyledClose = styled.img`
  margin-top: 7%;
  margin-left: 110%;
  width: 34px;
  height: 34px;
`;
