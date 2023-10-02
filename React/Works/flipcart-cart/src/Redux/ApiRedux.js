import {createSlice} from '@reduxjs/toolkit'

const Api=createSlice({
    name:'product',
    initialState:{
        productInfo:[]
    },
    reducers:{
        cartProduct:(state,action)=>{
            state.productInfo.push(action.payload);
            console.log(action.payload);
        }
    }
})
export const{cartProduct}=Api.actions
export default Api.reducer