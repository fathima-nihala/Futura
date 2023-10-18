import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./ApiRedux";
import ApiRedux from "./ApiRedux";

export default configureStore({
    reducer:{
        user:ApiRedux
    }
})