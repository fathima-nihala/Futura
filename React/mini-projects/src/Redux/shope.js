// import { createSlice } from "@reduxjs/toolkit";

// const EcomShope=createSlice({
//     name:'product',
//     initialState:{
//         shopeInfo:[],
//     },
//     reducers:{
//         shopItems:(state,action)=>{
//             const {id}=action.payload;
//             console.log('action pay',action.payload);
//             const existingItem=state.shopeInfo.find(item=>item.id===id);

//             console.log('existing itemmmmmm',existingItem);

//             if(existingItem){
//                 existingItem.quantity+=1;
//             }else{
//                 state.shopeInfo.push({...action.payload,quantity:1});
//             }
//         }
//     }
// })

// export const {shopItems}=EcomShope.actions;
// export default EcomShope.reducer