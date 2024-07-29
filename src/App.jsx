import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/ThemeStyle';
<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RouterProvider router={router} />
=======
import Login from './apis/auth/Login';
import { UserProvider } from './apis/UserContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Login />
        <GlobalStyles />
        <RouterProvider router={router} />
      </UserProvider>
>>>>>>> f92c3a333f9951f2d753eb2cda5ce545ce479d76
    </ThemeProvider>
  );
}

export default App;
