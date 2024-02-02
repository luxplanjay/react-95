import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import 'modern-normalize';
import { LangProvider } from './langContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
