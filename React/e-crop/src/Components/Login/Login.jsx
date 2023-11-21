import React, { useState } from 'react'
import './Login.css'

const Login = () => {
     // State to manage the active view (sign-up or sign-in)
    const[isRegisterActive,setRegisterActive]=useState(false);

    // Function to toggle between sign-up and sign-in views
    const toggleForm=()=>{
        setRegisterActive(!isRegisterActive);
    };

     // Function to handle form submission (needs implementation)
    const handleSubmit=(event)=>{
        event.preventDefault();
        //handle your form submission logic here
    }
  return (
    <div>
        <div className="animation-wrapper">
        <div className='animation-box'>
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
        <div>
            <div>
            <div className={`container${isRegisterActive ? ' active' : ''}`}>    
            <div className="form-container-sign-up">
                <form  onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <button>Sign Up</button>
                    <div className="social-icons">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </form>
                </div>     
               </div>
               </div>
        </div>
        </div>
    </div>
  )
}

export default Login