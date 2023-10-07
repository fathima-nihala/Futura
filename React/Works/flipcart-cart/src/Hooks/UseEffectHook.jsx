import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectHook = () => {
    const[state,setstate]=useState(0)
    useEffect(()=>{
        console.log("Good For You")
    },[])
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setstate(state+1)}>Click Here</button>
    </div>
  )
}

export default UseEffectHook