import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import styled from 'styled-components';

export const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 100], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <ParallaxContainer>
      <Scroller style={{ x }}>
        <Span> ABOUT COMMITATO </Span>
        <Span>ABOUT COMMITATO</Span>
        <Span> ABOUT COMMITATO</Span>
        <Span> ABOUT COMMITATO</Span>
        <Span> ABOUT COMMITATO</Span>
      </Scroller>
    </ParallaxContainer>
  );
};

const ParallaxContainer = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;
const Scroller = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Span = styled.span`
  display: block;
  margin-right: 30px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-weight: 300;
`;
