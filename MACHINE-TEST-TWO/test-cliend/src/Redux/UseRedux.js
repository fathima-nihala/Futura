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
        }
       

    }
    
})
export const{loginData}=Login.actions
export default Login.reducer
