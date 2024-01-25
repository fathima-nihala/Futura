import React from 'react'
import './newcollection.css'
import new_collections from '../API/apinew'
import Cards from './Cards'
import {Link} from 'react-router-dom'

const NewCollection = () => {
  return (
    <div>
    <div className='new-cln'>
        <h3>New arrivals</h3>
        <button className='new-btn'><Link to='/cmore' className='new-link' >see more</Link></button>
        </div>
        <div className='new-cntnt'>
            {new_collections.map((item,i)=>{
              return  <Cards key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
        </div>
  )
}

export default NewCollection