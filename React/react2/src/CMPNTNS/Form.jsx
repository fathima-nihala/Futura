import React, { useRef } from 'react'
import { useState } from 'react'

const Form = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [tel,setTel]=useState()

    const display=(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(tel);
       
    }
  return (
    <div>
        <form onSubmit={display}>
        <input type="text" placeholder='Name' value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input type="email"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type="tel"  placeholder='mob' value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <input type="submit" />
        {/* <button onClick={display}>Submit</button> */}
        </form>
    </div>
  )
}

export default Form