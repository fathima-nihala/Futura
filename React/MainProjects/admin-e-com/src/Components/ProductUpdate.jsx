import React, { useEffect, useState } from 'react'
import Modal from './Modal/Modal'
import { fetchProductById, productView, updateProduct } from '../API/ApiCall';

const ProductUpdate = (props, { productId },) => {

  // const [category, setCategory] = useState('')
  // const [type, setType] = useState('')
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [mrp, setMrp] = useState('')
  // const [price, setPrice] = useState('')
  // const[stock,setStock] = useState('')

  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   type: '',
  //   price: '',
  //   mrp: '',
  //   stock: ''
  //   // Add more fields as needed
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   // console.log('form',setFormData);

  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Call the updateProduct function with the updatedProduct data and productId
  //     await updateProduct(productId, updateProduct);
  //   } catch (error) {
  //     console.error('Error updating product:', error);
  //   }
  // };

  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetchProductById(productId); // Assuming fetchProductById returns all products
        setProducts(res.data);
        console.log("Products data:", res.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    getProducts();
  }, []);



  // useEffect(() => {
  //   const productId = 'your-product-id'; // Set the product ID you want to fetch
  //   handleget(productId);
  // }, []);




  // const[product,setProduct]=useState([])


  //   const handleget = async (id) => {
  //     console.log("handeget",id);
  //     try{
  //         const handegetdata= await fetchProductById(id)
  //         setProduct (handegetdata);
  //         console.log('handelgetdata',handegetdata);
  //     }catch(err){
  //         console.log(err);
  //     }


  // }

  // useEffect(()=>{
  //   const getproduct=async(id)=>{
  //     console.log('getproduct',id);
  //     try {
  //       const res = await fetchProductById(); 
  //       setProduct(res.data);
  //       console.log("dataaaa",res);
  //     } catch (error) {
  //       console.error('Error fetching product data:', error);
  //     }
  //   }
  //   getproduct()
  // },[])
  // !!!!!
  // const [product, setProduct] = useState({});


  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const fetchedProduct = await fetchProductById(productId);
  //       setProduct(fetchedProduct);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //   };

  //   getProduct();
  // }, [productId]);

  // const [profileId, setProfileId] = useState('');
  // const [data, setData] = useState({});    //object aayitaann koduthadh.ennale e.vechit access  cheyyan pattu.

  // const[product,setProduct]=useState([])

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const fetchedProduct = await fetchProductById(productId);
  //       setProduct(fetchedProduct);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //     }
  //   };

  //   getProduct();
  // }, [productId]);

  // useEffect(()=>{
  //   const getproduct=async(id)=>{
  //     console.log('getproduct',id);
  //     try {
  //       const res = await productView(); 
  //       setProduct(res.data);
  //       console.log("dataaaa",res);
  //     } catch (error) {
  //       console.error('Error fetching product data:', error);
  //     }
  //   }
  //   getproduct()
  // },[])

  // const handleInputChange = (event) => {
  //     setProfileId(event.target.value);
  // }

  //to update
  // const productUpdate=async(id)=>{
  //     console.log('**id',id);
  //     try {
  //     const a = await productView(formData)
  //        console.log('Result:', a);
  //        formData(a)
  //     } catch (error) {
  //         console.log('produt err',error);
  //     }
  // }

  //to update
  // const productUpdate=async(e)=>{
  //   e.preventDefault();
  //   updateProduct(productId,updateProduct)
  // }

  // useEffect(()=>{
  //     setType(data.type)
  //     setPrice(data.price)
  // },[data])



  return (
    <div>
      <Modal hideHandler={props.orderHideHandler}>
        {/* <div onClick={handleInputChange}> */}
        <h2>Update</h2>
        <div>
      <h1>{products.title}</h1>
      <ul>
        {/* {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))} */}

       {/* {products.map((product)=>(
          <div>
             <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div>{product.title}</div>
          </li>
          </div>
        ))} */}
      </ul>
    </div> 
<p>jjoi</p>


        {/* <form onSubmit={handleget}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={updateProduct.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={updateProduct.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <input type="text" name="type" value={updateProduct.type} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={updateProduct.price} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>MRP:</label>
            <input type="number" name="mrp" value={updateProduct.mrp} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input type="number" name="stock" value={updateProduct.stock} onChange={handleChange} />
          </div>
          <button type="submit">Update</button>
        </form> */}


       
       
      </Modal>
    </div>
  )
}

export default ProductUpdate
