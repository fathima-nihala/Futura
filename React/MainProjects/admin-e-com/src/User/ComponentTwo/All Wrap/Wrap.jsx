import React from 'react'
import './wrap.css'

const Wrap = (props) => {
  return (
    <div className='wrap'>
         {props.image && (
        <img src={props.image} alt='image not found' />
      )}
        {/* <img src={props.image} alt="" /> */}
        <p className='wrap-h'>{props.title}</p>
        <p className='wrap-d'>{props.description}</p>
        <div className='wrap-prices'>
        <div className='new-wrap'>
        <span className='ru'>₹</span>{props.mrp}
        </div>
        <div className='old-wrap'>
        ₹{props.price}
        </div>
        </div>
    </div>
  )
}

export default Wrap