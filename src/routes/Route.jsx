import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import RankingPage from '../pages/RankingPage/RankingPage';
import MyPage from '../pages/MyPage/MyPage';
import CallbackPage from '../pages/MyPage/CallbackPage';


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
  {
    path: '/login/callback',
    element: <CallbackPage />,
  },
]);
export default router;
