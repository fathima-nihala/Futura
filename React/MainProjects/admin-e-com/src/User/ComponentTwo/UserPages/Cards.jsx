import React from 'react'
// import {Link} from 'react-router-dom'
import './card.css'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    <div className='cards'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 

        <p>{props.name}</p>
        <div className="card-prices">
            <div className="card--price-new">
           <span className='dol'>₹</span>{props.new_price}
            </div>
        </div>
    </div>
  )
}

export default Cards