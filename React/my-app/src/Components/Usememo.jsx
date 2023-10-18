// import { stat } from 'fs'
import React, { useMemo, useState } from 'react'
import './Usememo.css'

function Usememo() {
    const [state,setState]=useState(0)
    const [state1,setState1]=useState(0)

    const display=()=>{
        setState(state+1)
    }
    
    const isEven=useMemo(()=>{
        let i=0
        while(i<200000000)
        i++
    return state%2==0
    },[state])
    console.log('iseven value',isEven);
        const display1=()=>{
            setState1(state1+1)
        }   
   
  return (
    <div>
        <button onClick={display}>{state}</button>
        {/* <button onClick={display}>{}</button> */}
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <button onClick={display1}>{state1}</button>
    </div>
  )
}

export default Usememo