import { motion, px } from 'framer-motion';
import styled from 'styled-components';
const MainPage1 = () => {
  return (
    <Box>
      <img
        src="src\assets\about_commitato.png"
        alt="animated_bar"
        width="320px"
      />
      ABOUT
      <img
        src="src\assets\about_commitato.png"
        alt="animated_bar"
        width="320px"
      />
      COMMITATO
    </Box>
  );
};

export default MainPage1;

const Box = styled(motion.div)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.logo};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  display: flex;
  justify-content: center;
  align-items: center;
`;
