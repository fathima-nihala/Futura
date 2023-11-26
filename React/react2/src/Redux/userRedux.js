import { createSlice } from "@reduxjs/toolkit";  //createSlice is a function provided by the Redux Toolkit, a _
// popular library for managing state in React applications using Redux.
const user = createSlice({
    name: 'user',
    initialState: {
        userInfo: [], //[] used to access array methods
    },
    reducers: {
        reduxFunction: (state, action) => {  // reduxFunction is user-defined
            console.log(action.payload);
            state.userInfo.push(action.payload)  //its mutable
        },
    },
})
export const { reduxFunction } = user.actions
export default user.reducer

// in here name,initialState, reducers are pre-defined