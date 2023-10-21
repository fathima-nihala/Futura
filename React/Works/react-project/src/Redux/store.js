
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './Localstorage';
import ecomReducer from './ecom';

const persistConfig = {
  key: 'abc',
  version: 1,
  storage,
};

const rootreducer = combineReducers({ Local: userReducer, Ecom: ecomReducer ,});
const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export let persistor = persistStore(store); 