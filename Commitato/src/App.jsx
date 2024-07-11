import { RouterProvider } from 'react-router-dom';
import Header from './layout/Header';
import LayOut from './layout/LayOut';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
