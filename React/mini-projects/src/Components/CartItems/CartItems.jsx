import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { CiSquareRemove } from 'react-icons/ci'
const CartItems = () => {
    const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

    console.log('all_product:', all_product);
    console.log('cartItems:', CartItems);
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
            {all_product && CartItems && all_product.map((e) => {
                if (CartItems[e.id] > 0) {

                     return (
                        <div key={e.id}>
                            <div className="cartitems-formate">
                                <img src={e.Image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{CartItems[e.id]}</button>
                                <p>{e.new_price * CartItems[e.id]}</p>
                                <CiSquareRemove
                                    style={{ width: "25", height: "25" }}
                                    onClick={() => { removeFromCart(e.id) }}
                                />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
export default CartItems