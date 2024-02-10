import React, { useEffect, useState } from 'react'
import { fetchProductById, productView, viewDetails } from '../../../API/ApiCall'
// import Wrap from '../All Wrap/Wrap'
import './all.css'
import Wrap from '../All Wrap/Wrap'
import { useParams } from 'react-router-dom'

const All = () => {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [viewState, setViewState] = useState(false)

  useEffect(() => {
    const getproduct = async (id) => {
      console.log('getproductsss', id);
      try {
        const res = await productView();
        setProduct(res.data);
        console.log("dataaaa", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    getproduct()
  }, [id])

  const showModelhandle = () => {
    setViewState(true)
  }
  const hideModelHandle = () => {
    console.log("aaaaaaaaaaaa");
    setViewState(false)
  }

  return (
    <div className='all'>
      <h2> Explore Our Stunning Dress Collection!</h2>
      <div className='all-cntnt'>
        {product.map((data) => (
          <Wrap
            key={data._id}
            // id={data._id}
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
