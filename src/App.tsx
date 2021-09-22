import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Home/>
  </ThemeProvider>
);

export default App;
