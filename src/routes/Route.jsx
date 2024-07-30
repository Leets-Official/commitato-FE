import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import RankingPage from '../pages/RankingPage/RankingPage';
import MyPage from '../pages/MyPage/MyPage';
const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
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
