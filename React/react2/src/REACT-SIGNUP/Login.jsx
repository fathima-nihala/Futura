import React, { useState } from 'react'
import { loginData } from './ApiCall';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const display=()=>{
        console.log({email,password});
        loginData({email,password})
    }
    return (
        <div className='signup-wrapper'>
            <div className="signup-box">
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
            <h1>Login Form</h1>
            <div>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} />
               <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                   <button onClick={display}>Login</button>
            </div>
        </div>
    )
}

export default Login