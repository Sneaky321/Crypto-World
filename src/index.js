import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root')); // This connects to the div in index.html
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
