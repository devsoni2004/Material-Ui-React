import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/dasboard.css';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import { AppContextProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <AppLayout />
      </AppContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);