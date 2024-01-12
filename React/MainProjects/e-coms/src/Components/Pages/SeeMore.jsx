import React from 'react'
import all_product from '../../ApiCall/apiAll'
import Item from '../Item/Item'
import './seemore.css'
const SeeMore = () => {
   
  return (
    <div className='see-more'>
         
      <div className='c-more'>
        { all_product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default SeeMore
