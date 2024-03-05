import { createSlice } from '@reduxjs/toolkit'

const UerLoginred = createSlice({
    name: 'userdetails',
    initialState: {
        loginInfo: []
    },
    reducers: {
        loginData: (state, action) => {
            state.loginInfo.push(action.payload);
            console.log(action.payload);
        },
        RemoveData: (state) => {
            state.loginInfo = []
        }

    }

})

export const { loginData, RemoveData } = UerLoginred.actions
export default UerLoginred.reducer