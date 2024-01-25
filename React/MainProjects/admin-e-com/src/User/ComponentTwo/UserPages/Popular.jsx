import React from 'react'
import './popular.css'
import pop_product from '../API/apipop'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h2 className='pop-h'>popular</h2>
        <div className='pop-div'>
            <div className='pop-cntnt'>
                {pop_product.map((data,i)=>{
                    return <Item key={i} id={data.id} name={data.name} image={data.Image} new_price={data.new_price} old_price={data.old_price}/>
                }
                )}
            </div>
            {/* <div className='pop-cntnt'></div>
            <div className='pop-cntnt'></div>
            <div className='pop-cntnt'></div> */}
        </div>
    </div>
  )
}

export default Popular