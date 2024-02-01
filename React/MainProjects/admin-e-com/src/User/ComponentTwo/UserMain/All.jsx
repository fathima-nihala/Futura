import React, { useEffect, useState } from 'react'
import { productView } from '../../../API/ApiCall'
// import Wrap from '../All Wrap/Wrap'
import './all.css'
import Wrap from '../All Wrap/Wrap'

const All = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproduct', id);
      try {
        const res = await productView();
        setProduct(res.data);
        console.log("dataaaa", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [])

  return (
    <div className='all'>
     <h2> Explore Our Stunning Dress Collection!</h2>
      <div className='all-cntnt'>
        {product.map((data) => (
          <Wrap
            key={data.id}
            image={`${process.env.PUBLIC_URL}/Images/${data.image}`}
            title={data.title}
            description={data.description}
            mrp={data.mrp}
            price={data.price}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  )
}

export default All
