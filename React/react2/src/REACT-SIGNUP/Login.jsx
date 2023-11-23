import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { loginDetails } from '../Redux/persistconf';

const Login = () => {

    const dispatch=useDispatch;

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const display=()=>{
        console.log({email,password});
        loginDetails({email,password},)
    }

    const formData={
        email,
        password
    }
    dispatch(loginDetails(formData));
    console.log('login data submitted',formData);
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
      <div className='login-cntnts'> 
        <div className='login'> 
        <div className='login-heading'>
            <h1>Login Form</h1>
            </div>
            <div className='login-input'>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} /> <br />
               <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/> 
               </div>
               <div className='login-button'>
                   <button onClick={display}>Login</button>
                   </div>
            </div>
            </div>
        </div>
    )
}

export default Login