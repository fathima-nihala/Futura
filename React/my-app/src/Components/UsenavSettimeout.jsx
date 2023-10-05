import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UsenavSettimeout = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    setTimeout(()=>{
        navigate('/Userefhook')
    },3000)  //time delay varuthan   ,3s shesham naxt page automatically run avum
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default UsenavSettimeout