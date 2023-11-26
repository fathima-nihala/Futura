import React from 'react'
// import data_product from '../Components/Assets/data'
// import Item from '../Components/Item/Item'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Item/Item'

const LatestCollection = () => {
  return (
    <div className='relativeproduct'>
        <h1>Latest Collections</h1>
        <hr />
        <div className="relatedproducts-item">
           {all_product.map((item,i)=>{
            return<Item  key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price}/>
           })}
        </div>
    </div>
  )
}

export default LatestCollection