import { createSlice } from "@reduxjs/toolkit";

const Login=createSlice({
    name:'details',
    initialState:{
        loginInfo:[]
    },
    reducers:{
        loginDetails:(state,action)=>{
            state.loginInfo.push(action.payload);
            console.log(action.payload);
        },
        removeData:(state)=>{
            state.loginInfo=[]
        }
    }
})
export const {loginDetails,removeData}=Login.actions
export default Login.reducer

//to get login data in local storage