import { createSlice } from "@reduxjs/toolkit";

const Ecom=createSlice({
    name:'product',
    initialState:{
        ecominfo:[]
    },
    reducers:{
        ecomData:(state,action)=>{
            state.ecominfo.push(action.payload)
            console.log(action.payload);
        }
    }
})
export const{ecomData}=Ecom.actions
export default Ecom.reducer
