import React from 'react'
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <img src="" alt="" />SHOP <img src="" alt="" />{product.catagory} <img src="" alt="" />{product.name}


    </div>
  )
}

export default Breadcrum