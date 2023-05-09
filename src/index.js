import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import AppRoutes from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes></AppRoutes>
  </React.StrictMode>
);
