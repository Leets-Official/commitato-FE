import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../layout/LayOut';
import MainPage from '../pages/MainPage/MainPage';
import HomePage from '../pages/HomePage/HomePage';
import RankingPage from '../pages/RankingPage/RankingPage';
import MyPage from '../pages/MyPage/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/ranking',
        element: <RankingPage />,
      },
      {
        path: '/my',
        element: <MyPage />,
      },
    ],
  },
]);
export default router;
