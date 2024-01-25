import React from 'react'
import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function Login() {

  const[password,setpassword]=useState('')
    const[email,setemail]=useState('')

    let form = new FormData()
    form.append('email', email)
    form.append('password', password)

  return (
    <div className='login'>
    <div className='log-main'>
        <div className='log-main-one'>
            <div className='log-head'>
                <h4>Login</h4>
            </div>
            <form encType='multipart/form-data'  >
                <div className='log-body'>
                    <div className='log-body-one'>
                       
                        <div className='log-body-cntnt'>
                            <HiOutlineMail className='log-icon' />
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className='log-body-cntnt'>
                            <MdOutlineLockOpen className='log-icon' />
                            <input type="password" placeholder='Passoword' value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='log-frgt'> 
                                <p>Forget Password?</p>
                            </div>
                        <div className='log-btn'>
                            <button >Login</button>
                        </div>
                        <div className='log-para'>
                            <p>Don't have an account?<Link to='/register' className='log-link'>Register</Link></p>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    </div>
</div>
  )
}

export default Login