import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/global.css';
import './style/utils.css';
import MessageProvider from './context/messages/MessageProvider';
import UserProvider from './context/user/UserProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessageProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MessageProvider>
  </React.StrictMode>
);
