import React, { useState } from 'react'
import './register.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { testLoginData } from '../../API/ApiCall'

const Login = () => {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    const dispatch = useDispatch()
    const display = () => {
        console.log({ email, password });
        try {
            testLoginData({ email, password }, dispatch)
        } catch (error) {
            console.log("error in pass", error);
        }
    }

    return (
        <div>
            <div className='register'>
                <div className='reg-main'>
                    <div className='reg-main-one'>
                        <div className='reg-head'>
                            <h4>SignUp</h4>
                        </div>
                        <div className='reg-body'>
                            <div className='reg-body-one'>
                                <div className='reg-body-cntnt'>
                                    <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                                </div>
                                <div className='reg-body-cntnt'>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                                </div>
                                <div className='reg-btn'>
                                    <button onClick={display}>Login</button>
                                </div>
                                <div className='reg-para'>
                                    <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
                                    {/* &nbsp; */}</div>
                                {/* <button className='end' type="submit">Sign Up</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login