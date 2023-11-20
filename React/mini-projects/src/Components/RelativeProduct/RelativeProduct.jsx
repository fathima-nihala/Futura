import React from 'react'
import './RelativeProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelativeProduct = () => {
  return (
    <div className='relativeproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelativeProduct