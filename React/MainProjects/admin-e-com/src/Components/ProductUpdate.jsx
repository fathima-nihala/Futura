import React, { useEffect, useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import Modal from './Modal/Modal'
import { fetchProductById, updateProduct } from '../API/ApiCall';
import { Link, useParams } from 'react-router-dom';
import '../../src/Components/Pages/manageproduct.css'

const ProductUpdate = (props) => {

  // var category1=

  // console.log('catejlfd',category1);

  // const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState(props.category || 'category')
  // const [type, setType] = useState('')
  const [title, setTitle] = useState(props.title, 'title')
  const [description, setDescription] = useState(props.description, 'description')
  const [mrp, setMrp] = useState(props.mrp, 'mrp')
  const [price, setPrice] = useState(props.price, 'price')
  const [stock, setStock] = useState(props.stock, 'stock')
  const [image, setImages] = useState({});
  const [id] = useState(props.id)

  console.log();



  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const getDataHandle = await fetchProductById(id);
  //       console.log('getDataHandle..', getDataHandle);

  //       setCategory(getDataHandle.category)
  //       setType(getDataHandle.type)
  //       setDescription(getDataHandle.description)
  //       setMrp(getDataHandle.mrp)
  //       setPrice(getDataHandle.price)
  //       setStock(getDataHandle.stock)
  //       setImages(getDataHandle.image)
  //       setTitle(getDataHandle.title)

  //     } catch (error) {
  //       console.log('err', error);
  //     }
  //   };
  //   fetchData();

  // }, [id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await fetchProductById(id);
  //       console.log('datataaaaaaaaaaaaa', data);
  //       setCategory(data.category)
  //       // setProduct(data);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [id]);

  //to update/edit product
  const handleUpdate = async () => {
    try {
      // console.log('product id update',updateProduct);
      updateProduct()
    } catch (error) {
      console.log(error);
    }
  }


  // useEffect(()=>{
  //   const fetchData =async()=>{
  //         try {
  //           const getDataHandle=await fetchProductById(id);
  //           console.log('getDataHandle',getDataHandle);
  //           console.log('kittuvoda',getDataHandle);
  //           setvalue(getDataHandle)
  //         }
  //         catch(err){
  //           console.log(err);
  //         }
  //       }
  //       fetchData()
  // },[])


  // to update
  const productUpdate = async (e) => {
    e.preventDefault()

    const updatevalue = await updateProduct({ id, category, title, description, price, image, stock, mrp })
    console.log('updatevalue', updatevalue);

  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await updateProduct(product);
  //     alert('Product updated successfully!');
  //   } catch (error) {
  //     console.error('Error updating product:', error);
  //     alert('Failed to update product. Please try again.');
  //   }
  // };

  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        {/* <Link to='/manage' className='previous'><CiCircleRemove className='prev-icon' /></Link> */}
        <h2 className='update-hd'>Update</h2>
        <form encType='multipart/form-data' onSubmit={productUpdate}>
          <div className="form-group">
            <label className='up-label'>Catagory:</label>
            <input type="text" value={category} name="category" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>Title:</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>Description:</label>
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          {/* <div className="form-group">
            <label>Type:</label>
            <textarea name="type" placeholder={props.type}  /> */}
          {/* <label>Type:</label> */}
          {/* <input type="text" name="type" value={props.type} onChange={(e) => setType(e.target.value)} /> */}
          {/* </div> */}
          <div className="form-group">
            <label className='up-label'>Price:</label>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label className='up-label'>MRP:</label>
            <input type="number" name="mrp" value={mrp} onChange={(e) => setMrp(e.target.value)} className='up-inp' />
          </div>
          <div className="form-group">
            <label className='up-label'>Stock:</label>
            <input type="number" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} className='up-inp' />
          </div>
          <div className="form-group">
            {/* <label>Image:</label> */}
            <input type="file" filename='image' onChange={(e) => setImages(e.target.files[0])} />
          </div>
          <button type="submit" className='up-btn'>Update</button>
        </form>




      </Modal>
    </div>
  )
}

export default ProductUpdate
