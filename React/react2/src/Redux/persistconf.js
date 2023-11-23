import { createSlice } from "@reduxjs/toolkit";

const Login=createSlice({
    name:'details',
    initialState:{
        loginInfo:[]
    },
    reducers:{
        loginDetails:(state,action)=>{
            console.log(action.payload);
            state.loginInfo.push(action.payload);
        }
    }
})
export const {loginDetails}=Login.actions
export default Login.reducer

//to get login data in local storage