import React, { useEffect, useState } from 'react'
import Modal from './Modal/Modal'
import { productView, updateProduct } from '../API/ApiCall';

const ProductUpdate = (props) => {

    // const [category, setCategory] = useState('')
    // const [type, setType] = useState('')
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [mrp, setMrp] = useState('')
    // const [price, setPrice] = useState('')
    // const[stock,setStock] = useState('')


    const [profileId, setProfileId] = useState('');
    const [data, setData] = useState({});    //object aayitaann koduthadh.ennale e.vechit access  cheyyan pattu.

    const[product,setProduct]=useState([])

    useEffect(()=>{
      const getproduct=async(id)=>{
        console.log('getproduct',id);
        try {
          const res = await productView(); 
          setProduct(res.data);
          console.log("dataaaa",res);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      }
      getproduct()
    },[])

    // const handleInputChange = (event) => {
    //     setProfileId(event.target.value);
    // }

    //to update
    const productUpdate=async(id)=>{
        console.log('**id',id);
        try {
        const a = await productView(profileId)
           console.log('Result:', a);
           setData(a)
        } catch (error) {
            console.log('produt err',error);
        }
    }



    // useEffect(()=>{
    //     setType(data.type)
    //     setPrice(data.price)
    // },[data])

  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        {/* <div onClick={handleInputChange}> */}
            <h2>Update</h2>
            {/* <div>
            <input type="text" name="" value={category} id="" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder={data.type} value={type} onChange={(e) => setType(e.target.value)} />
            <input type="text" placeholder='stock' value={stock} onChange={(e) => setStock(e.target.value)} />
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder='mrp' value={mrp} onChange={(e) => setMrp(e.target.value)} />
            <input type="text" placeholder={price} value={price} onChange={(e) => setPrice(e.target.value)} /><br />
            </div> */}
{/* {product.map((data) => (
        <div key={data.id} className='manage-body-two'>
          <div className='tab-body-img'>{data && <img src={`${process.env.PUBLIC_URL}/Images/${data.image}`}/>}</div>
          <div className='tab-body'>{data.stock}</div>
          <div className='tab-body'>{data.title}</div>
          <div className='tab-body-des'>{data.description}</div>
          <div className='tab-body'>{data.price}</div>
          <div className='tab-body'>{data.mrp}</div>
        </div>
      ))} */}
        {/* </div> */}
        <button onClick={()=>productUpdate}>update</button>
      </Modal>
    </div>
  )
}

export default ProductUpdate
