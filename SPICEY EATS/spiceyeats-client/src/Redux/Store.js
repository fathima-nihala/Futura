import { configureStore,combineReducers } from "@reduxjs/toolkit";
import usered from './useRedux'
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
    key: 'SpiceyEatsLogin',
    version: 1,
    storage,
  }

  const rootreducer=combineReducers({UerLogin:usered})

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

