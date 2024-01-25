
import { createSlice } from "@reduxjs/toolkit";

const LoginScentify=createSlice({
    name:'details',
    initialState:{
        loginScentifyInfo:[]
    },
    reducers:{
        logingScentifyData:(state,action)=>{
            state.loginScentifyInfo.push(action.payload);
            console.log(action.payload);
        },
        RemoveData:(state)=>{
            state.loginScentifyInfo=[]
        }

    }
})
export const{logingScentifyData}=LoginScentify.actions
export default LoginScentify.reducer