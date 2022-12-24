import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import Web from './AppRoute';
import '../src/styles/home.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  </React.StrictMode>,
);
