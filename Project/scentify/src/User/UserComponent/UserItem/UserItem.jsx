import React, { useState } from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import {FaHeart} from "react-icons/fa"
import '../UserPages/usrpopproducts.css'

const UserItem = (props) => {

    const[isHeartFillted,setIsHeartFillted]=useState(false)
   
    const handleHeartClick=()=>{
        setIsHeartFillted(!isHeartFillted)


    };

    const heartFill={
        color: isHeartFillted ? '#FF3333' : '#FFFFFF',  
        backgroundColor: isHeartFillted ? '#FFFFFF' : 'rgb(171, 114, 39)',
    }

    
  return (
    <div className='item'>
        <div className="heartclass" style={heartFill} onClick={handleHeartClick}>
          <FaHeart className='heart' />
        </div>
    <Link to={`/product/${props.id}`}>  <img src={props.image} alt='' className='item-img'/></Link> 
    <h5 className='item-head'>{props.title}</h5>
   <p className='item-para'>{props.description}</p>
   <div className='item-end'>
   <p className='paisa'><span className='rupees'> ₹</span>{props.price}</p>
   <button className='item-end-btn'><IoMdAdd />Add To Cart</button>
   </div>
</div>
  )
}

export default UserItem