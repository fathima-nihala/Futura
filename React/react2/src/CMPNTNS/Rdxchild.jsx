import React from 'react'
import { useSelector } from 'react-redux'

const Rdxchild = () => {
    const reduxdata=useSelector((state)=>state.user.userInfo)
    console.log('hehe',reduxdata[0]);
  return (
    <div>
        {reduxdata[0] && reduxdata[0].map((li)=>(
            <h1>Hello World{li.id}</h1>
        ))}
    </div>
  )
}

export default Rdxchild