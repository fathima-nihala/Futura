import React from 'react'
import { userss } from '../API/ApiCall'

const Users = () => {
  const userdata=()=>{
    userss()
  }
  userdata()
  return (
    <div>
      hujieq
      {Users.map((data)=>{
        <div>
          {data.email}
        </div>
      
      })}
      jdki
    </div>
  )
}

export default Users