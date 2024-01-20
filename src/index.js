import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';

import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    shadow: '#121417',
    darkBlue: '#0B44CD',
    lightBlue: '#3470FF',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/rent-car-app">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);
