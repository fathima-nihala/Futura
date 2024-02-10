import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usered from './userRedux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'loginAdminData',
  version: 1,
  storage,
}

const rootreducer = combineReducers({ Login: usered })

const persistedReducer = persistReducer(persistConfig, rootreducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);

