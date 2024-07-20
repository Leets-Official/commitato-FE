import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/ThemeStyle';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
