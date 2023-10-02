import { configureStore } from "@reduxjs/toolkit";
import ApiRedux from "./ApiRedux"

export default configureStore({
    reducer:{
        product:ApiRedux
    }
})