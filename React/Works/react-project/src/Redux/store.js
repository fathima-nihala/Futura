import { configureStore,combineReducers } from '@reduxjs/toolkit'
// import ApiRedux from './ApiRedux'
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
 
//store.js Localstoragejs  SignUpjsx