import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import {store,persistor} form './'
import reportWebVitals from './reportWebVitals';
import { formToJSON } from 'axios';
// import { Store } from './redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { UserInfoContextProvider } from './ContextReducer/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <UserInfoContextProvider>
  <App />
  </UserInfoContextProvider>
  <PersistGate loading={null} persistor={persistor}>
  </PersistGate>
  </Provider>
    
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
