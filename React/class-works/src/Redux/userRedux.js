import { createSlice } from "@reduxjs/toolkit";

const Login=createSlice({
    name:'details',
    initialState:{
        loginInfo:[]
    },
    reducers:{
        loginData:(state,action)=>{
            state.loginInfo.push(action.payload);
            console.log(action.payload);
        },
        removeData:(state)=>{
            state.loginInfo=[]
        }
    }
})
export const {loginData,removeData}=Login.actions
export default Login.reducer