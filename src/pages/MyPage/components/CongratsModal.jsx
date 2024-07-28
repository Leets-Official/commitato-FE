import styled from 'styled-components';
import stupid_potato from '../../../assets/stupid_potato.png';
import talking_potato from '../../../assets/talking_potato.png';
import developer_potato from '../../../assets/developer_potato.png';
import ceo_potato from '../../../assets/ceo_potato.png';
import Button from '../../../components/Button';
import close from '../../../assets/close.png';
import yellowButton from '../../../assets/yellowButton.png';
import { useState, useRef } from 'react';

const CongratsModal = ({ githubId }) => {
  const character = [
    {
      id: 0,
      title: '바보 감자',
      img: stupid_potato,
    },
    {
      id: 1,
      title: '말하는 감자',
      img: talking_potato,
    },
    {
      id: 2,
      title: '개발자 감자',
      img: developer_potato,
    },
    {
      id: 3,
      title: 'CEO 감자',
      img: ceo_potato,
    },
  ];

  const selectedCharacterId = 0;

  const selectedCharacter = character.find(
    char => char.id === selectedCharacterId,
  );

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

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
                  축하드려요 {githubId}githubId님, 당신의 감자가 성장했어요!{' '}
                  <br />
                  <br />
                </StyledComment>
                <StyledChar>
                  {selectedCharacter && (
                    <div key={selectedCharacter.id}>
                      <Styledimg src={selectedCharacter.img} />
                      <StyledTitle>{selectedCharacter.title}</StyledTitle>
                    </div>
                  )}
                  <StyledyellowButton src={yellowButton} />
                  {selectedCharacter && (
                    <div key={selectedCharacter.id}>
                      <Styledimg src={selectedCharacter.img} />
                      <StyledTitle>{selectedCharacter.title}</StyledTitle>
                    </div>
                  )}
                </StyledChar>
                <StyledOkay>
                  <Button onClick={() => setModalOpen(false)} label="확인" />
                </StyledOkay>
              </StyledContent>
            </StyledModal>
          )}
        </StyledDiv>
      </div>
    </>
  );
};

export default CongratsModal;

const StyledButton = styled.button``;

const StyledContent = styled.div``;

const StyledTitle = styled.div`
  margin-top: 4%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
`;

const StyledOkay = styled.div`
  margin-top: 8%;
`;

const StyledyellowButton = styled.img`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 25%;
  width: 29px;
  height: 30px;
`;

const StyledChar = styled.div`
  justify-content: center;
  display: flex;
`;

const Styledimg = styled.img`
  width: 174px;
  height: 209px;
  object-fit: cover;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 704px;
  height: 461px;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 30px 30px;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledComment = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const StyledClose = styled.img`
  margin-top: 7%;
  margin-left: 125%;
  width: 34px;
  height: 34px;
`;
