import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import bridge from '@vkontakte/vk-bridge';

// Инициализация VK Bridge (обязательно для работы внутри VK Mini Apps)
bridge.send('VKWebAppInit')
  .then((data) => {
    console.log('✅ VK Mini App инициализировано успешно!', data);
  })
  .catch((error) => {
    // Вне VK Mini Apps — не критично, приложение работает как обычный сайт
    console.log('ℹ️ Приложение открыто вне VK Mini Apps');
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);