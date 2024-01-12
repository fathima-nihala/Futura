import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';
import { EcomSignUp } from '../../ApiCall/ApiCall';


const Register = () => {
    const [firstname, setfirstname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const display=(e)=>{
        e.preventDefault()

        EcomSignUp({firstname,email,password})
    }
    return (
        <div className='register'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Register</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                    <CgGirl className='reg-icon'/>
                        <input type="text" placeholder='Name' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
                    </div>
                    <div className='reg-body-cntnt'>
                    <HiOutlineMail className='reg-icon'/>
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className='reg-body-cntnt'>
                    <MdOutlineLockOpen className='reg-icon'/>
                        <input type="password" placeholder='Passoword' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <div className='reg-btn'>
                        <button onClick={display}>Create Account</button>
                    </div>
                    <div className='reg-para'>
                        <p>Already have an account?<Link to='/' className='reg-link'>Login</Link></p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register