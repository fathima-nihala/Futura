import { createSlice } from "@reduxjs/toolkit";

const LoginEcom=createSlice({
    name:'details',
    initialState:{
        loginEcomInfo:[]
    },
    reducers:{
        logingEcomData:(state,action)=>{
            state.loginEcomInfo.push(action.payload);
            console.log(action.payload);
        },
        RemoveData:(state)=>{
            state.loginEcomInfo=[]
        }

    }
})
export const{logingEcomData}=LoginEcom.actions
export default LoginEcom.reducer