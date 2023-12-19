import React, { useState } from 'react'
import './SignUp.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { SignUpDetails } from './ApiCall';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const[firstname,setfirstname]=useState("");
    const[phone,setPhone]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[image,setImage]=useState({});

    let formData=new FormData()
    formData.append('firstname',firstname)
    formData.append('phone',phone)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('image',image)



    // const display=()=>{
    //     SignUpDetails({firstname,phone,email,password})
    // }
     
    const displaytwo=(e)=>{
        e.preventDefault();
        console.log('*&*&*&',formData);
        SignUpDetails(formData)
    }
  return (
    <div>
        <div  className='signup'>
        <img src="https://as2.ftcdn.net/v2/jpg/06/14/07/19/1000_F_614071960_1flTsdIUoTMK9JgaiXiqZv7yAwa1XXwy.jpg" alt="" className='signup_bg' />
        <div className='signup_form'>
            <h1 className='signup_title'>Sign Up</h1>
         <form onSubmit={displaytwo} encType='multipart/form-data'>
            <div className="signup_inputs">
                <div className="signup_box">
                <input type="text" placeholder="Enter your name" value={firstname} onChange={(e) => setfirstname(e.target.value)}/>
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
                <div className='signup_box2'>
                    <input type="file" filename='image'  onChange={(e)=>setImage(e.target.files[0])} />
                </div>
            </div>
            <p style={{color:"white",marginRight:180}}>Already a member? <Link to="/log" style={{textDecoration:"none"}}>Login</Link></p>
            <div className='signup_button'>
                <button type='submit' className='signup_button_btn'>Sign Up</button>
            </div>
            </form>
        </div>
    </div>
    </div>
    
  )
}

export default SignUp