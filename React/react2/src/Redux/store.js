import { configureStore } from "@reduxjs/toolkit";//used to create a Redux store instance with sensible default settings and other pre-configured options.
import usereducer from "./userRedux"; //useredux is anyname(user-defined)..but path kodthadh userRedux.js nde aavvannam.

export default configureStore({
    reducer:{
        user:usereducer  //usereducer import kodutha any name aann..
    }
})