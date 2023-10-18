import React, { useState } from 'react'
import { useCallback } from 'react';
import { Wyz } from './CallbackChild';

const Callback = () => {
    const [state,setstate]=useState(0)
    const [state1,setstate1]=useState(0)
    console.log('parent rendered');

    function show(){
        setstate(state+1)
    }

    function show1(){
        setstate1(state1+1)
    }

    const HandleClick=()=>{}
        const Memorizedclick=useCallback(HandleClick,[state1])
   
  return (
    <div>
        <h1>state : {state}</h1>
        <h1>state1 : {state1}</h1>
        <button onClick={show}>Click</button>
        <button onClick={show1}>Click</button>
        <Wyz value={Memorizedclick}/>

    </div>
  )
}

export default Callback