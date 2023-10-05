import React, { useContext } from 'react'
import { Appcontext } from './Context'

const Sample1 = () => {

    const value=useContext(Appcontext)

  return (
    <div>{value}</div>
  )
}

export default Sample1

//child is its child file