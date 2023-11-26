import React from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";

export const ShopContext=createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};


const ShopContextProvider=(props)=>{

    const[cartItems1,setCartItems]=useState(getDefaultCart());

    const addToCart = (itemId) => {
        // if (cartItems1[itemId]) {
        //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // }
        setCartItems((prev) =>({ ...prev,[itemId]:prev[itemId] + 1 }));
        // console.log('setcartitems',setCartItems);
        

        console.log('shopcontext,cartitems',cartItems1);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems1){
            if(cartItems1[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+= itemInfo.new_price * cartItems1[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems1){
            if(cartItems1[item]>0)
            {
                totalItem+=cartItems1[item];
            }
        }
        return totalItem;
    }

    const contextValue={all_product,cartItems1,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}; 

    return(
       <ShopContext.Provider value={contextValue}>
        {props.children}
       </ShopContext.Provider>
          
    )
}
export default ShopContextProvider