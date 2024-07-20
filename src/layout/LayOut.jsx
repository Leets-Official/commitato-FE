import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

const LayOut = () => {
  return (
    <StyledDiv>
      <Header />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
      <Footer />
    </StyledDiv>
  );
};

export default LayOut;

const StyledDiv = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
`;

const StyledWrapper = styled.div`
  height: 300px;
  position: relative;
  transform: translateY(0%);
`;
