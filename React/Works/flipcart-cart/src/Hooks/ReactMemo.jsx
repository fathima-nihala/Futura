import React, { useState } from 'react'
import { Abcdef } from './ReactMemoChild';

const ReactMemo = () => {
    const [state,setstate]=useState(0)
    const [state1,setstate1]=useState(0)
    console.log('parent rendered');

    function show(){
        setstate(state+1)
    }

    function show1(){
        setstate1(state1+1)
    }

  return (
    <div>
        <h2>state: {state}</h2>
        <h2>state1: {state1}</h2>
        <button onClick={show}>Click</button>
        <button onClick={show1}>Click</button>
        <Abcdef value={state}/>
    </div>
  )
}

export default ReactMemo