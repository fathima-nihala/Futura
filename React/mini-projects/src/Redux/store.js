// import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
// import shopeReducer from './shope'


//   const persistConfig = {
//     key: 'abc',
//     version: 1,
//     storage,
//   };

//   const rootreducer=combineReducers({ EcomShope:shopeReducer});
//   const persistedReducer = persistReducer(persistConfig, rootreducer);
//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   });
//   export let persistor = persistStore(store); 