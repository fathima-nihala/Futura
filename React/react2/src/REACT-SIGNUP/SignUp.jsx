import React, { useState } from 'react'
import {  SignUpData } from './ApiCall'
import './SignUp.css'

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
    <div className='main'>
      <div className='ani'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='inp'>
        <div className='inp-one'>
        <input type="text" placeholder='Firstname' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
        </div>
        <div className="inp-one">
        <input type="text" placeholder='Secondname' value={secondname} onChange={(e)=>setsecondname(e.target.value)}/>
        </div>
        <div className='inp-one'>
        <input type="text" placeholder='age' value={age} onChange={(e)=>setage(e.target.value)}/>
        </div>
        <div className="inp-one">
         <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="inp-one">
        <input type="address" placeholder='Address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
        </div>
        <div className="inp-one">
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div className="inp-two">
        <button onClick={display}>Submit</button>
        </div>
      </div>
       

    </div>
  )
}

export default SignUp