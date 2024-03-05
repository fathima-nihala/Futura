import React, { useState } from 'react'
import { products } from '../../API/ApiCall'

const AddItem = () => {
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState({})

  let formdata = new FormData()
  formdata.append('image', image)
  formdata.append('category', category)
  formdata.append('title', title)
  formdata.append('type', type)
  formdata.append('description', description)
  formdata.append('price', price)

  const display = (e) => {
    e.preventDefault();
    console.log('formdata----',formdata);
    products(formdata)
  }
  return (
    <div>
      <div className='addproduct'>
        <form encType='multipart/form-data' onSubmit={display}>
          <h3 className='addproduct-head'>Upload A New <span className='addproduct-head-1'>Product</span></h3>
          <div className='addproduct-cntnt'>
            <input type="text" name="" value={category} id="" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className='addproduct-cntnt'>
            <input type="text" placeholder='type' value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          <div className='addproduct-cntnt'>
            <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='addproduct-cntnt'>
            <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='addproduct-cntnt'>
            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className='addproduct-image'>
            <input type="file" filename='image' onChange={(e) => setImage(e.target.files[0])} className='adprod-img' />
          </div>
          <button type='submit' className='adprod-btn'>Add Item</button>
        </form>
      </div>
    </div>
  )
}

export default AddItem