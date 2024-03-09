import { createSlice } from "@reduxjs/toolkit";

const RegData = createSlice({
    name: 'details',
    initialState: {
        regInfo: [],
    },
    reducers: {
        regDetails: (state, action) => {
            state.regInfo.push(action.payload);
            console.log(action.payload);
        },
        removeDetails:(state)=>{
            state.regInfo=[];
        }
    }
})

export const {regDetails,removeDetails} = RegData.actions;
export default RegData.reducer;
