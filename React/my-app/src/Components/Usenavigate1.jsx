import React from 'react'
import { useNavigate } from 'react-router-dom'
 

const Usenavigate1 = () => {
    const navigate=useNavigate()
    const display=() =>{
        navigate('/')
    }
  return (
    <div>
        <button onClick={display}>click me</button>
    </div>
  )
}

export default Usenavigate1