import React, { useEffect, useState } from 'react'
import { CartAddTo, fetchProductById, productView, viewDetails } from '../../API/ApiCall'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IoMdStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";
import '../ComponentTwo/view.css'

const View = () => {
  // console.log(props, 'ertyu');
  const [data, setData] = useState([])


  const dataId = useParams()
  console.log("------------------", dataId);


  useEffect(() => {
    const display = async () => {
      try {
        const data = await axios.get(`http://localhost:7002/api/geItemss/${dataId.id}`)
        console.log("final data", data);
        setData(data.data)
      } catch (err) {

      }
    }
    display()
  }, [])

  // console.log('bbb',data.quantity);
  // const datas = {
  //   quantity:1,
  //     itemName:data.title,
  //     itemPrice:data.price,
  //     itemImage:data.image,
  //   //  itemDes:props.des
  // }

  const cartHandler = async (e) => {
    e.preventDefault()
    return await CartAddTo(data)
  }
  console.log('lll', CartAddTo);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={`/Images/${data.image}`} alt="" />
          <img src={`/Images/${data.image}`} alt="" />
          <img src={`/Images/${data.image}`} alt="" />
          {/* <img src={`/Images/${data.image}`} alt="" /> */}
        </div>
        <div className="productdisplay-img">
          <img src={`/Images/${data.image}`} alt="" className='productdisplay-main-img' />
        </div>
        <div className="productdisplay-right">
          <h1>{data.title}</h1>
          <div className="productdisplay-right-stars">
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoMdStar style={{ color: '#FFD700', width: 30, height: 30, }} />
            <IoStarHalf style={{ color: '#FFD700', width: 30, height: 28, }} />
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{data.mrp}</div>
            <div><span className="productdisplay-right-price-new">₹</span>{data.price}</div>
          </div>
          <div className="productdisplay-right-description">{data.description}</div>
          <div className='display-right-btn'>
            <button className='view-btn1' onClick={cartHandler}>Add To Cart</button>
            <button className='view-btn2'>Buy Now</button>
          </div>
          <p><span>Category: {data.category}</span></p>
          <p><span>Stock:</span>{data.stock}</p>
          {/* <>
            <div key={data._id}>
              <div>{data.title}</div>
            </div>
          </> */}
        </div>
      </div>
    </div>
  )
}

export default View