// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import useRed from './Usereducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  RegData: useRed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk]
});

export const persistor = persistStore(store);
