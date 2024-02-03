import React, { useEffect, useState } from 'react'
import './manageproduct.css'
import { fetchProductById, productDelete, productView, updateProduct } from '../../API/ApiCall'
import { FaRegTrashCan } from "react-icons/fa6";
import ProductUpdate from '../ProductUpdate';

const ManageProducts = () => {


  //to get product
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

  //to delete product
  const DeleteProduct = async(id)=>{
    console.log('id is',id);
    try {
      productDelete(id)
    } catch (error) {
      console.log(error);
    }
    alert('Removed Successfully.');
  }


    //to update/edit product
    // const handleUpdate=async()=>{
    //   try {
    //     // console.log('product id update',updateProduct);
    //     updateProduct()
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    //chat-gpt 
    // const handleUpdate = async (productId) => {
    //   try {
    //     const productToUpdate = product.find(item => item._id === productId);
    //     // Call a function to handle the update with the productToUpdate data
    //     updateProduct(productId, productToUpdate);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    //for modal
    const[order,setOrder] = useState(false);



    // updateeee
    const handleProducts = (productId) => {
      console.log('idddddddddddd',productId);
      setOrder(true);

      try{
        fetchProductById(productId)
        updateProduct(productId)
      }
      catch(err){
        console.log(err);
      }

    };
    const hideHandler = () => {
      setOrder(false)
    }

  return (
    <div >
      <div className='manage'>
      <h3 className='manage-head'>Product<span className='manage-head-sub'>Details</span></h3>
      <div className='manage-body-one'>
      <div className='tab-hed'>Image</div>
      <div  className='tab-hed'>Stock</div>
      <div className='tab-hed'>Title</div>
      <div className='tab-hed'>Description</div>
      <div className='tab-hed-price'>Price</div>
      <div className='tab-hed'>Mrp</div>
      <div className='tab-hed'>Update</div>
      <div className='tab-hed'>Remove</div>
      </div>

      {product.map((data) => (
        <div key={data.id} className='manage-body-two'>
          <div className='tab-body-img'>{data && <img src={`${process.env.PUBLIC_URL}/Images/${data.image}`}/>}</div>
          <div className='tab-body'>{data.stock}</div>
          <div className='tab-body'>{data.title}</div>
          <div className='tab-body-des'>{data.description}</div>
          <div className='tab-body'>{data.price}</div>
          <div className='tab-body'>{data.mrp}</div>
          <div className='tab-body'><button className='tab-body-update' onClick={()=>handleProducts(data._id)}>Update</button></div>
          <div className='tab-body-btn'><button className='tab-body-dlt'><FaRegTrashCan onClick={()=>DeleteProduct(data._id)}/></button></div>
        </div>
      ))}
      </div>
      {order && <ProductUpdate orderHideHandler={hideHandler}/>}
    </div>
  )
}

export default ManageProducts
