import React, { useState } from 'react'
// import './login.css'
import './adminlogin.css'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLockOpen } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const AdminLogin = () => {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    return (
        <div className='login'>
            <Link to='/'><CiCircleRemove className='goback' /></Link>
            <div className='log-main' onclick="onclick">
                <div className="log-main-one">
                    <div className='log-head'>
                        <h4>Sign In</h4>
                    </div>
                    <div className="log-body">
                        <div className="log-body-one">
                            <div className='log-body-cntnt'>
                                <HiOutlineMail className='log-icon' />
                                <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className='log-body-cntnt'>
                                <MdOutlineLockOpen className='log-icon' />
                                <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                            </div>
                            <div className='log-frgt'>
                                <p>Forget Password?</p>
                            </div>

                            <div className='log-btn'>
                                <button className='end' >Sign In</button>
                            </div>
                            <div className='log-para'>
                                <p className='end-para'>don't have an account?<Link to='/register' className='end-link'>Signup Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin