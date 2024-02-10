import React, { useEffect, useState } from 'react'
import { fetchProductById, productView, viewDetails } from '../../API/ApiCall'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
  // console.log(props, 'ertyu');
  const [data, setData] = useState([])

  // const { id } = par;

const dataId = useParams()
  const [category, setCategory] = useState('');
  // const [type, setType] = useState( '');
  const [title, setTitle] = useState();
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [Images, setImages] = useState({});
console.log("------------------",dataId);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const productId = props.match.params.id;
  //       const handegetdata = await viewDetails(dataId.id);
  //       console.log('valueee', handegetdata);

  //       // Assuming handegetdata is an object
  //       // setItem(handegetdata.data);
  //       setCategory(handegetdata.category)
  //       //   setType(handegetdata.type)
  //       setTitle(handegetdata.title);
  //       setDescription(handegetdata.description);
  //       setPrice(handegetdata.price);
  //       setImages(handegetdata.Images);


  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData(); // Call the async function immediately

  // }, [dataId.id]);

useEffect(()=>{
  const display=async()=>{
    try{
      const data=await axios.get(`http://localhost:7002/api/geItemss/${dataId.id}`)
      console.log("final data",data);
      setData(data.data)
      }catch(err){
      
      }
  }
display()
},[])

  return (
    <div>
    
        <>
          <div key={data._id}>
            <div>{data.title}</div>
            <img src={`/Images/${data.image}`} alt="" />
          </div>
        </>
    
    </div>
  )
}

export default View