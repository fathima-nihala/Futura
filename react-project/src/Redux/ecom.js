
import { createSlice } from '@reduxjs/toolkit';

const Ecom = createSlice({
  name: 'product',
  initialState: {
    ecomInfo: [],
  },
  reducers: {
    cartItems: (state, action) => {
      const { id } = action.payload;
      console.log('action payyy', action.payload);
      const existingItem = state.ecomInfo.find(item => item.id === id);

      console.log('existinggggggggggggggggggggg', existingItem);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.ecomInfo.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      const existingItem = state.ecomInfo.find(item => item.id === action.payload);
      console.log('first 0.1', action.payload);
      console.log('first check', existingItem);
      if (existingItem) {
        //if the item already exist decrease the quality by 1
        existingItem.quantity -= 1;

        // If the quantity becomes zero, remove the item
        if (existingItem.quantity === 0) {
          // state.mycartInfo = state.mycartInfo.pop(item => item.id == id); 
          state.ecomInfo.splice(state.ecomInfo.findIndex((item) => item.id == action.payload), 1)
        }
      }

    }

  },
});

export const { cartItems, removeItem } = Ecom.actions;
export default Ecom.reducer