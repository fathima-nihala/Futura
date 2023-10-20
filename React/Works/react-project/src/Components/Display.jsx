import React from 'react'
import './mydisplay.css'
import { useDispatch } from 'react-redux'
import { cartItems } from '../Redux/ecom'

const Display = ({productDetails}) => {
    const dispatch=useDispatch()
    const handleAddToCart=() =>{
        dispatch(cartItems(productDetails))
    }
    return (
        <div className='display-main-container'>
            <div className='display-all'>
                <div className='display-items'>
                    <div className='display-item-image'>
                        <img src={productDetails. thumbnail} alt="display-item-image" />
                    </div>
                    <div className='display-item-details'>
                        <div className="details-items"><h2>{productDetails.title}</h2></div>
                        <div className="details-items">{productDetails.description}</div>
                        <div className="details-items"><span>₹{productDetails.price}&nbsp;&nbsp;<span className='break'>MRP:<span className='break-content'>{productDetails.mrp}</span></span></span></div>
                        <div className='details-button'>
                            <button className='buy-now'>Buy Now</button>
                            <button className='add-to-cart' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display