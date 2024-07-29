import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import RankingPage from '../pages/RankingPage/RankingPage';
import MyPage from '../pages/MyPage/MyPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
<<<<<<< HEAD

=======
>>>>>>> f92c3a333f9951f2d753eb2cda5ce545ce479d76
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
]);
export default router;
