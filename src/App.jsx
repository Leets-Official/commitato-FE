import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/ThemeStyle';
import { UserProvider } from './apis/UserContext';
import User from './pages/MyPage/User';
import MyPage from './pages/MyPage/MyPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <User />
        <GlobalStyles />
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
