import React, { useState } from 'react'
import {  SignUpData } from './ApiCall'

const SignUp = () => {
    const[firstname,setfirstname]=useState('')
    const[secondname,setsecondname]=useState('')
    const[email,setemail]=useState('')
    const[age,setage]=useState('')
    const[address,setaddress]=useState('')
    const[password,setpassword]=useState('')

    const display=()=>{
        SignUpData({firstname,secondname,age,email,address,password})
    }

  return (
    <div>
        <input type="text" placeholder='Firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
        <input type="text" placeholder='Secondname' value={secondname} onChange={(e)=>setsecondname(e.target.value)}/>
        <input type="text" placeholder='Age' value={age} onChange={(e)=>setage(e.target.value)}/>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type="address" placeholder='Address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={display}>Submit</button>

    </div>
  )
}

export default SignUp