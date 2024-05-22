import { createSlice } from "@reduxjs/toolkit"; 

const Local=createSlice({
    name:'details',
    initialState:{
        localInfo:[]
    },
    reducers:{
        signupData:(state,action)=>{
            state.localInfo.push(action.payload)
            console.log(action.payload);
        }

    }
})
export const{signupData}=Local.actions
export default Local.reducer


//store.js Localstoragejs  SignUpjsx