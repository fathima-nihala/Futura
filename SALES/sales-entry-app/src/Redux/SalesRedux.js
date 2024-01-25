import { createSlice } from '@reduxjs/toolkit'

const SalesData = createSlice({
    name: 'SalesData',
    initialState: {
        currentsale: null,
        totalPrice: null
    },
    reducers: {
        salesDataAdd: (state, action) => {
            state.currentsale = action.payload
        },
        TotalAmount: (state, action) => {
            state.totalPrice = action.payload
        }
    }

})

export const { salesDataAdd, TotalAmount } = SalesData.actions
export default SalesData.reducer