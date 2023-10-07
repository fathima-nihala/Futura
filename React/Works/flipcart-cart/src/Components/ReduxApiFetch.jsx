import React, {useEffect,useState} from  'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cartProduct } from '../Redux/ApiRedux';

const ReduxApiFetch = () => {
    const[state,setstate]=useState([]);
    const dispatch=useDispatch()
    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data)
            dispatch( cartProduct(res.data))
        }
        display()
    },[])
  return (
    <div><b>ReduxApiFetch</b><br /> inspect l console check cheyy moindhe</div>
  )
}

export default ReduxApiFetch