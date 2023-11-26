import React, { useState } from 'react'
import './SignUp.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { SignUpDetails } from './ApiCall';


const SignUp = () => {
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");


    const display=()=>{
        SignUpDetails({name,phone,email,password})
    }
  return (
    <div className='signup'>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" className='signup_bg' />
        <div className='signup_form'>
            <h1 className='signup_title'>Sign Up</h1>
            <div className="signup_inputs">
                <div className="signup_box">
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="signup_box">
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <IoIosPhonePortrait style={{color:"gray"}}/>
                </div>
                <div className="signup_box">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MdOutlineMailOutline style={{color:"gray"}}/>
                </div>
                <div className="signup_box">
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <RiLockPasswordLine style={{color:"gray"}}/>
                </div>
            </div>
            <div className='signup_button'>
                <button type='submit' className='signup_button_btn' onClick={display}>Sign Up</button>
            </div>
        </div>
        
    </div>
  )
}

export default SignUp