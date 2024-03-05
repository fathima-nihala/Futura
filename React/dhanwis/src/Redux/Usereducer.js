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
    }
});


export const { regDetails } = RegData.actions;
export default RegData.reducer;
