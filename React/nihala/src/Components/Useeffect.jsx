import React, { useEffect, useState } from 'react'

function Useeffect() {
    const[state, setstate]=useState(0)
   useEffect(()=>{
    console.log('Hai Welcome');
   },[])
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>setstate(state+1)}>Click me</button>
    </div>
  )
}

export default Useeffect