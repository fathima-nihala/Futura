import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import './Login.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { EcomLogin } from '../../ApiCall/ApiCall';

const Login = () => {
    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')

    const dispatch=useDispatch()

    const displayone=()=>{
        console.log({email,password});
        try {
            EcomLogin({email,password},dispatch)
        } catch (error) {
            console.log("error",error);
        }
    }
    return (
        <div className='login'>
            <div className='log-main'>
                <div className='log-main-one'>
                    <div className='log-head'>
                        <h4>login</h4>
                    </div>
                    <div className='log-body'>
                        <div className='log-body-one'>
                            <div className='log-body-cntnt'>
                                <HiOutlineMail className='log-icon' />
                                <input type="email" placeholder='Email'  value={email} onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            <div className='log-body-cntnt'>
                                <MdOutlineLockOpen className='log-icon' />
                                <input type="password" placeholder='Passoword' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                            </div>
                            <div className='log-frgt'> 
                                <p>Forget Password?</p>
                            </div>
                            <div className='log-btn'>
                                <button onClick={displayone}>Login</button>
                            </div>
                            <div className='log-para'>
                            <p>Don't have an account?<Link to='/register' className='log-link'>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login