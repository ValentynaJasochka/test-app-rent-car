import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './fonts/manrope/Manrope-Medium.ttf';
import './fonts/manrope/Manrope-Regular.ttf';
import './fonts/manrope/Manrope-SemiBold.ttf';
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
    white: '#FFFFFF',
    grey: '#f9f9f9',
    darkGrey:'#8A8A89',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/test-app-rent-car">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
    </React.StrictMode>
  </>
);
