import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
