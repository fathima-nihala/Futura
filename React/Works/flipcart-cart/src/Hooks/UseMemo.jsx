import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [state,setstate]=useState(0)
    const [state1,setstate1]=useState(0)

    const display=()=>{
        setstate(state+1)
    }

    const isEven=useMemo(()=>{
        let i=0
        while(i<200000000)
        i++
    return state%2==0
    },[state])
    console.log('iseven',isEven);

    const display1=()=>{
        setstate1(state1+1)
    }
  return (
    <div>
        <button onClick={display}>{state}</button>
        <span>{isEven ? 'even': 'odd'}</span>
        <button onClick={display1}>{state1}</button>
    </div>
  )
}

export default UseMemo