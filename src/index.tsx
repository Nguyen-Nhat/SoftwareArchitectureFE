import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import './index.css';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
