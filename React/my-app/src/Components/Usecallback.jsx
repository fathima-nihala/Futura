import React, { useCallback } from 'react'
import { useState } from 'react';
import { Abcdefg } from './Child2';

export const Usecallback = () => {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    console.log('parent rendered');

    function show(){
        setState(state+1)
    }
    function show1(){
        setState1(state1+1)
    }
    const Handleclick=()=>{}
        const Memorizedclick=useCallback(Handleclick,[state1]) // Memorizedclick is user defined. (Handleclick,[]) its only shows 'parent rendered' twice.
                                                              //(Handleclick,[state1]) or (Handleclick,[state]) its shows 'parent rendered' twise and 'child rendered' twice.
  return (
    <div>
        <h2>state: {state}</h2>
        <h2>state1: {state1}</h2>
        <button onClick={show}>Click1</button>
        <button onClick={show1}>Click2</button>
        <Abcdefg value={Memorizedclick}/>
    </div>
  )
}
export default Usecallback

//child2  is its child file