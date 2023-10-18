import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userData } from '../Redux/ApiRedux';

const ApiReduxFetch = () => {
    const [state,setstate]=useState([]);
    const dispatch=useDispatch()

    useEffect(()=>{
        async function display(){
            const res=await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data)
            dispatch(userData(res.data))
        }
        display()
    },[])
  return (
    <div>ApiReduxFetch</div>
  )
}

export default ApiReduxFetch