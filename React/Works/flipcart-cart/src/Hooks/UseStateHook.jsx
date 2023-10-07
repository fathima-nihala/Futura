import React, { useState } from 'react'

const UseStateHook = () => {
    const [state,setstate]=useState(0)
    function display(){
        setstate(state+1)
    }
    function reset(){
        setstate(0)
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={display}>Click</button> &nbsp;
        <button onClick={reset}>Reset</button>
    </div>
    
  )
}

export default UseStateHook