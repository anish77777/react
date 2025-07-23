// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { BookProvider } from './context/BookContext'; // ✅ Add this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider> {/* ✅ Wrap App with BookProvider */}
        <App />
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>
);
