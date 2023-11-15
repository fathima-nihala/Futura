import React, { useContext } from 'react'
import './CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import drop_down from '../Components/Assets/drop_down.png'

const ShopCatagory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div>
      <div className='shop-catagory'>
      <div className='shop-catagory-left'>
          <h2>FLAT 50% OFF</h2>
          <p><span className='p-sub'>12</span> &nbsp;Hours <span className='p-sub'>20</span> &nbsp;mins</p>
          <button>Explore now</button>
      </div>
      <div className='shop-catagory-right'>
        <img  src={props.banner} alt="" />
        </div>
        </div>
        <div className="shopcatagory-indexsort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcatagory-sort">
            Sort by <img className='shopcatagory-sort-img' src={drop_down} alt="" />
          </div>
        </div>
        <div className="shopcatagory-products">
          {all_product.map((item,i)=>{
              if(props.catagory===item.catagory){
                return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
          })}
        </div>
        <div className="shopcatagory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCatagory