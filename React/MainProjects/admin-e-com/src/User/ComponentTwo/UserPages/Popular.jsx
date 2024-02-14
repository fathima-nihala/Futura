import React, { useEffect, useState } from 'react'
import './popular.css'
import pop_product from '../API/apipop'
import Item from '../Item/Item'
import { productView } from '../../../API/ApiCall'
import { Link } from 'react-router-dom'


const Popular = () => {

  const [product, setProduct] = useState([])
  const Popular = product.filter(product => product.item === 'popular');

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproduct', id);
      try {
        const res = await productView(id);
        setProduct(res.data);
        console.log("kids", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [])

  return (
    <div className='popular'>
       <h2 className='pop-h'>popular</h2>
        {/* <div className='pop-div'>
            <div className='pop-cntnt'>
                {pop_product.map((data,i)=>{
                    return <Item key={i} id={data.id} name={data.name} image={data.Image} new_price={data.new_price} old_price={data.old_price}/>
                }
                )}
            </div>
            
        </div> */} 

      <div className='kids-cntnt'>
        {Popular.map((data) => (
          <Link to={`/view/${data._id}`} className='proflink'><div>
            <Item
              key={data._id}
              image={`${process.env.PUBLIC_URL}/Images/${data.image}`}
              title={data.title}
              description={data.description}
              mrp={data.mrp}
              price={data.price}
            />
          </div></Link>

        ))}
      </div>
    </div>
  )
}

export default Popular