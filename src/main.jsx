import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Consolidated styles file
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);