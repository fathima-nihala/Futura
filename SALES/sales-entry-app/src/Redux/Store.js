import { configureStore,combineReducers } from "@reduxjs/toolkit";
import salesredux from './SalesRedux'
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
    key: 'salesData',
    version: 1,
    storage,
  }

  const rootreducer=combineReducers({SalesData:salesredux})

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

