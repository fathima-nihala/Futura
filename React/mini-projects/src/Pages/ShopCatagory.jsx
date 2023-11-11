import React, { useContext } from 'react'
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCatagory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-catagory'>
        
    </div>
  )
}

export default ShopCatagory