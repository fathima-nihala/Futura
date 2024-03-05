import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store,persistor} from './Redux/store';
// import { store,persistor } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Blackmode/ThemeProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>

  <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
