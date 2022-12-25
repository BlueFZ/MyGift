import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './AppRoute';
import '../src/styles/home.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>,
);
