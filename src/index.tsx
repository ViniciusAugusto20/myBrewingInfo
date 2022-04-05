import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider } from './context/toast';
import { AuthProvider } from './context/auth';

import Routes from './routes';

import { GlobalStyle } from './assets/css/global';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ToastProvider>
        <GlobalStyle />
        <Routes />
      </ToastProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root'),
);
