import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { CiSquareRemove } from 'react-icons/ci'
const CartItems = () => {
    // const {addToCart}=useContext(ShopContext)
    // console.log(addToCart);
    const { all_product, cartItems1, removeFromCart ,getTotalCartAmount} = useContext(ShopContext);

    console.log('all_product:', all_product);
    console.log('cartItems1:', cartItems1);
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
            {all_product.map((e) => {
                if (cartItems1[e.id] > 0) {

                     return (
                        <div key={e.id}>
                            <div className="cartitems-formate cartitems-formate-main">
                                <img src={e.Image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems1[e.id]}</button>
                                <p>${e.new_price * cartItems1[e.id]}</p>
                                <CiSquareRemove  className='cartitems-remove-icon'
                                    style={{ width: "25", height: "25" }}
                                    onClick={() => { removeFromCart(e.id) }}
                                />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <hr />
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promocode,Enetr it here.</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code'/>
                            <button>Submit</button>
                        </div>
                </div>
            </div>
        </div>
    );
};
export default CartItems