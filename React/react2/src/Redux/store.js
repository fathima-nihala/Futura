// import { configureStore } from "@reduxjs/toolkit";//used to create a Redux store instance with sensible default settings and other pre-configured options.
// import usereducer from "./userRedux"; //useredux is anyname(user-defined)..but path kodthadh userRedux.js nde aavvannam.

// export default configureStore({
//     reducer:{
//         user:usereducer  //usereducer import kodutha any name aann..
//     }

import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userRedux from   './userRedux';

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
    key: 'root',
    version: 1,
    storage,
  }

  const rootreducer=combineReducers({user:userRedux})

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
  
 export let persistor = persistStore(store)
  