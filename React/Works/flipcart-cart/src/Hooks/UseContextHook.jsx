import React from 'react'
import { Appcontext } from './context'
import { useContext } from 'react'

const UseContextHook = () => {
    const value=useContext(Appcontext)
  return (
    <div>
        <h1>{value}</h1>
        </div>
  )
}

export default UseContextHook