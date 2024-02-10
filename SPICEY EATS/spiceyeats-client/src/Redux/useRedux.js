import { createSlice } from '@reduxjs/toolkit'

const UerLogin = createSlice({
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

export const { loginData, RemoveData } = UerLogin.actions
export default UerLogin.reducer