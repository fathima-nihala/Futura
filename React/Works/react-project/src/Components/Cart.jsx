import React from 'react'
import './mycart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems= useSelector((state) => state.Ecom.ecomInfo);

    return (

        // <div className='first'>


        // <div className='cart-body'>
        //                     <h2>Shopping Cart</h2>
        //                     <div className='cart-items-container'>
        //                 {cartItem.map((item, index) => (
        //                     <div className='cart-item' key={index}>
        //                         <div className='cart-item-image'>
        //                             <img src={item.thumbnail} alt={item.name} />
        //                         </div>
        //                         <div className='cart-item-details'>
        //                             <span className='cart-item-title'>{item.title}</span>
        //                             <span className='cart-item-description'>{item.description}</span>
        //                             <span>Price: ₹{item.price}<span className='mrp-value'> MRP ₹{item.mrp}</span></span>
                                    
        //                             <div className='cart-item-utils'>
        //                                 <button className='cart-item-count'>Qty: {item.quantity}</button>
        //                                 <div className='cart-item-utils-a'>
        //                                     <button className='cart-util-button'>Delete</button>
        //                                     <button className='cart-util-button'>Save for Later</button>
        //                                     <button className='cart-util-button'>Share</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //                 </div>
        //         </div>




        <div className='first'>
        <div className='cart-body'>
                            <h2>Shopping Cart</h2>
                            <div className='cart-items-container'>
                                {cartItems.map((item, index) => (
                                    <div className='cart-item' key={index}>
                                        <div className='cart-item-image'>
                                            <img src={item.thumbnail} alt={item.name} />
                                        </div>
                                        <div className='cart-item-details'>
                                            <span className='cart-item-title'><h5>{item.title}</h5></span>
                                            <span className='cart-item-description'>{item.description}</span>
                                            <span>₹{item.price} &nbsp;<span className='mrp-value'>₹{item.mrp}</span></span>
                                            
                                            <div className='cart-item-utils'>
                                                <button className='cart-item-count'>Qty: {item.quantity}</button>
                                                <div className='cart-item-utils-a'>
                                                    <button className='cart-util-button'>Delete</button>
                                                    <button className='cart-util-button'>Save for Later</button>
                                                    <button className='cart-util-button'>Share</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                </div>
    )
}

export default Cart



{/* <div className='cart-item-image'>
                            <img src={item.thumbnail} alt={item.name} />
                        </div>
                        <div className='cart-item-details'>
                            <div className='cart-item-data'><h3>{item.title}</h3></div>
                            <div className='cart-item-data'><p>{item.description}</p></div>
                            <div className='cart-item-data'><span>₹{item.price}&nbsp;&nbsp;<span className='cart-break'>MRP:<span className='cart-break-content'>{item.mrp}</span></span></span></div>
                            <div className='cart-item-utilities'>
                                <button className='cart-item-count'>Qty: {item.quantity}</button>
                            <div className='cart-item-utilities-a'>
                                <div ><a href="">Delete</a></div> &nbsp;
                                <div><a href="">Save for later</a></div>&nbsp;
                                <div><a href="">Share</a></div>
                            </div>
                            </div>
                        </div> */}