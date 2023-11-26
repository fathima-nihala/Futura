// import React, { useState } from 'react'
import './NewsLetter.css'
// import { useDispatch } from 'react-redux';
// import OrderMessage from '../../Pages/OrderMessage';

const NewsLetter = () => {
  // const [order,setOrder]=useState(false);
  // const dispatch=useDispatch();
  // const handleOrderItem=()=>{
  //   setOrder(true);
  // };
  // dispatch()
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email"  placeholder='Your Email id'/>
            <button >Subscribe</button>
        </div>
        {/* {order && <OrderMessage/>} */}
    </div>
  )
}

export default NewsLetter