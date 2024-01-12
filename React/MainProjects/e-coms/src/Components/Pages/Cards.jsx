import React from 'react'
// import {Link} from 'react-router-dom'
import './card.css'

const Cards = (props) => {
  return (
    <div className='cards'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="card-prices">
            <div className="card--price-new">
           <span className='dol'>$</span>{props.new_price}
            </div>
            {/* <div className="card-price-old">
            ${props.old_price} */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default Cards