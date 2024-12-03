import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Импорт Provider
import store from './Redux/Store.js'; // Импорт store

import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '@material-tailwind/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Передаем store */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
