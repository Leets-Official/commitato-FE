// import { useRef, useState, useEffect } from 'react';

// export const useScrollAnimation = () => {
//   const [isInViewport, setIsInViewport] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     if (!ref.current) return;

//     const callback = entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setIsInViewport(true);
//           console.log('IN');
//         } else {
//           setIsInViewport(false);
//           console.log('OUT');
//         }
//       });
//     };

//     const options = { root: null, rootMargin: '0px', threshold: 0 };
//     const observer = new IntersectionObserver(callback, options);
//     observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return { isInViewport, ref };
// };
