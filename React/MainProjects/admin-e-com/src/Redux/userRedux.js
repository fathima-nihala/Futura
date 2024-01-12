import { createSlice } from "@reduxjs/toolkit";

const Login=createSlice({
    name:'details',
    initialState:{
        LoginInfo:[]
    },
    reducers:{
        loginData:(state,action)=>{
            state.LoginInfo.push(action.payload);
            console.log(action.payload);
        },
        removaData:(state)=>{
            state.LoginInfo=[]
        }

    }
    
})
export const{loginData,removaData}=Login.actions
export default Login.reducer