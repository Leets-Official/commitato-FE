import React, { useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/ThemeStyle';
import User from './pages/MyPage/User';
import Login from './apis/auth/Login';
import MyPage from './pages/MyPage/MyPage';
import { UserProvider, UserContext } from './apis/UserContext';

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Main />
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  );
}

const Main = () => {
  const { userId } = useContext(UserContext);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (userId) {
      setReady(true);
    }
  }, [userId]);

  return (
    <>
      <Login />
      {ready && (
        <>
          <User />
          <MyPage />
        </>
      )}
    </>
  );
};

export default App;
