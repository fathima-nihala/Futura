import React, { useState } from 'react'
import { useEffect } from 'react'
import { CartDeleteTo, CartGetTo } from '../../../API/ApiCall'
import { CiSquareRemove } from 'react-icons/ci'
import './cart.css'

const Cart = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        const getCartHandler = async () => {
            try {
                const CartDatas = await CartGetTo();
                setItems(CartDatas)
            } catch (error) {
                console.log(error);
            }
        }
        getCartHandler()
    }, [])

    const deleteCartHandler = async (id) => {
        console.log('delete cart', id);
        try {
            CartDeleteTo(id)
        } catch (error) {
            console.log(error);
        }
    }


    const groupedItems = items.reduce((acc, curr) => {
        if (acc[curr._id]) {
            acc[curr._id].Quantity += 1; // Increment quantity if item exists
        } else {
            acc[curr._id] = { ...curr, Quantity: 1 }; // Initialize quantity if item doesn't exist
        }
        return acc;
    }, {});



    return (
        <div className='cartitems'>
            <div className="cartitems-formate-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />


            {Object.values(groupedItems).map((data) => (
                <div key={data.id}>
                    <div className="cartitems-formate cartitems-formate-main">
                        <img src={`/Images/${data.image}`} alt="" className="carticon-product-icon" />
                        <p>{data.title}</p>
                        <p>₹{data.price}</p>
                        <button className="cartitems-quantity">{data.Quantity}</button>
                        <button onClick={() => deleteCartHandler(data._id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart





// {items && items.length > 0 && items.map((data) => (
//     <div key={data.id}>
//     <div className="cartitems-formate cartitems-formate-main">
//         <img src={`/Images/${data.image}`} alt="" className="carticon-product-icon" />
//         <p>{data.title}</p>
//         <p>₹{data.price}</p>
//         <button className="cartitems-quantity"></button>
//         <button onClick={() => deleteCartHandler(data._id)}>Remove</button>
//     </div>
// </div>
// ))}