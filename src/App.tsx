import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from 'Components/Header';

import 'config/reactotronConfig';
import store from './store';
import history from 'services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
