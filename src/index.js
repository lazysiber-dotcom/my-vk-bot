import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Инициализация VK Bridge после рендера
async function initVKBridge() {
  // Проверка: работает ли внутри VK
  if (typeof window !== 'undefined' && window.vkBridge) {
    try {
      await window.vkBridge.send('VKWebAppInit');
      console.log('✅ VK Mini App инициализировано успешно!');
    } catch (error) {
      console.warn('⚠️ VK Bridge не доступен (открыто вне VK):', error);
    }
  } else {
    console.log('ℹ️ Приложение открыто вне VK Mini Apps');
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Инициализируем VK Bridge после рендера
initVKBridge();