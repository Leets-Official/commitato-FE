import { Box } from '../pages/MainPage/MainPage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();

  console.log('isInViewport:', isInViewport);
  return (
    <Box ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </Box>
  );
};
