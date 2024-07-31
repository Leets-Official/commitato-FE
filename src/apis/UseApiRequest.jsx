// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const UseApiRequest = (url, method, body = null) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios({
//           method,
//           url,
//           data: body,
//         });
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, method, body]);

//   return { data, error, loading };
// };

// export default UseApiRequest;
