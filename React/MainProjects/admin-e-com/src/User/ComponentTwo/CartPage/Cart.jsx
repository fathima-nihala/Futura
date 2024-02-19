import React, { useState } from 'react'
import { useEffect } from 'react'
import { CartDeleteTo, CartGetTo } from '../../../API/ApiCall'
import { CiSquareRemove } from 'react-icons/ci'
import { FaArrowLeftLong } from "react-icons/fa6";
import './cart.css'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';

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
    console.log(items);


    // const deleteCartHandler = async (id) => {
    //     console.log('delete cart', id);
    //     try {
    //         CartDeleteTo(id)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // const groupedItems = items.reduce((acc, curr) => {
    //     if (acc[curr._id]) {
    //         acc[curr._id].Quantity += 1; // Increment quantity if item exists
    //     } else {
    //         acc[curr._id] = { curr}; // Initialize quantity if item doesn't exist
    //     }
    //     return acc;
    // }, {});

    // Function to calculate sumtotal  of mrp
    const sumTotal = items.reduce((mrp, value) => mrp + (parseFloat(value.itemQuantity) * parseFloat(value.mrp)), 0)

    // Function to calculate total price
    const totalprice = items.reduce((price, value) => price + (parseFloat(value.itemQuantity) * parseFloat(value.price)), 0);

    //function Discount
    const discount = sumTotal - totalprice

    return (
        <div className='cartitems'>

            <div>

                {/* {Object.values(groupedItems) */}
                {items.map((data) => (
                    // <div key={data.id}>
                    //     <div className="cartitems-formate cartitems-formate-main">
                    //         <img src={`/Images/${data.image}`} alt="" className="carticon-product-icon" />
                    //         <p>{data.title}</p>
                    //         <p>₹{data.price}</p>
                    //         <button>+</button>
                    //         <button className="cartitems-quantity">{data.Quantity}</button>
                    //         <button>-</button>
                    //         <button onClick={() => deleteCartHandler(data._id)}>Remove</button>
                    //     </div>
                    // </div>
                    <CartItem id={data._id} image={data.image} title={data.title} Quantity={data.itemQuantity} price={data.price} mrp={data.mrp} />
                ))}
            </div>
            <div className='tottal__amount_container'>

                <h2 className='pay'>Payment Details</h2>

                {!isNaN(sumTotal) &&
                    <div className='sum-cart'>
                        <h3>Sum Total:  </h3>
                        <h3>₹{sumTotal.toFixed(2)}</h3>
                    </div>
                }
                <hr />

                <div className='sum-cart'>
                    <h3>Discount:</h3>
                    <h3>₹{discount}.00</h3>
                </div>
                <hr />

                {!isNaN(totalprice) &&
                    <div className='tot'>
                        <h3>Total Amount: </h3><h3 className='total-amnt'>₹{totalprice.toFixed(2)}</h3></div>
                }

                <button className='proceed-btn'>PROCEED TO CHECKOUT</button>
                <p className='rtrn'><Link className='rtrn-link' to='/'><FaArrowLeftLong />Return to Shopping</Link></p>
            </div>
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