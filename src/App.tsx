import React from 'react';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Header from 'Components/Header';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
