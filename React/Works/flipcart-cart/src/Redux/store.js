// import { configureStore } from "@reduxjs/toolkit";
// import ApiRedux from "./ApiRedux"

// export default configureStore({
//     reducer:{
//         product:ApiRedux
//     }
// })
//redux   ApiRedux.js   ReduxApiFetch.jsx




// import { configureStore,combineReducers } from '@reduxjs/toolkit'
// import ApiRedux from './ApiRedux'
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
//   import storage from 'redux-persist/lib/storage'
//   const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
 
//   const rootreducer = combineReducers({product:ApiRedux})
//   const persistedReducer = persistReducer(persistConfig, rootreducer)

//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   })
//  export let persistor = persistStore(store)  
 //store.js ApiRedux.js ReduxApiFetch.jsx


 

 import { configureStore,combineReducers } from '@reduxjs/toolkit'
import ApiRedux from './ApiRedux'
import { persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './Localstorage'

const persistConfig = {
        key: 'local',
        version: 1,
        storage,
      }
     
 
  const rootreducer = combineReducers({Local:userReducer})
  const persistedReducer = persistReducer(persistConfig, rootreducer)

  export const store = configureStore({
    reducer: persistedReducer,
  })
 export let persistor = persistStore(store)  
 
//storejs Localstoragejs  SignUpjsx
