// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

// const imgVariants = {
//   visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
//   hidden: { opacity: 0, scale: 0 },
// };

// const AnimatedImgs = ({ num }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);
//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={imgVariants}
//       className="animatedImg"
//     >
//       <img src={`comment${num}`} alt={`comment${num}`} />
//     </motion.div>
//   );
// };
