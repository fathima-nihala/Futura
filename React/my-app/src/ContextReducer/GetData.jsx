import React, { useContext } from 'react'
import { userContext } from './context'

const GetData = () => {
    const {user,dispatch}=useContext(userContext)
    console.log(user);

    function removedata(){
    dispatch({type:'Remove'})  //{} is used bcs its object
    }
  return (
    <div>GetData
      <button onClick={removedata}>Click</button>
    </div>
  )
}

export default GetData