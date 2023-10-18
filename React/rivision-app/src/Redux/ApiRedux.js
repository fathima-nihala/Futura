import { createSlice } from "@reduxjs/toolkit";

const Awx=createSlice({
    name:'user',
    initialState:{
        userInfo:[]
    },
    reducers:{
        userData:(state,action)=>{
            state.userInfo.push(action.payload);
            console.log(action.payload);
        }
    }
})
export const {userData}=Awx.actions
export default Awx.reducer