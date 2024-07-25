import { motion, transform, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import comment2 from '../../../assets/comment2.png';
const textVariants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 200,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.9,
    },
  },
};

const AnimatedText = () => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv1>HOW?</HowDiv1>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv2>HOW?</HowDiv2>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowDiv3>HOW?</HowDiv3>
      </motion.div>
    </>
  );
};

export default AnimatedText;

const HowDiv1 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 148px;
  color: ${({ theme }) => theme.COLORS.black};
  position: relative;
  top: 50px;
  left: 500px;
`;

const HowDiv2 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  top: 350px;
  left: 900px;
`;
const HowDiv3 = styled(HowDiv1)`
  color: ${({ theme }) => theme.COLORS.yellow[200]};
  top: 550px;
  left: 1400px;
`;
