import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginData } from '../API/ApiCall'

const Login = () => {
    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')

    const dispatch=useDispatch()

    const displayone=()=>{
        console.log({email,password});
        try {
            LoginData({email,password},dispatch)
        } catch (error) {
            console.log("error in pass",error);
        }
    }
    
    return (
        <div>
            <div className="container" onclick="onclick">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="center">
                    <h2>Please Sign In</h2>
                    <input type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <input type="password" placeholder="password"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    {/* <h2>&nbsp;</h2> */}
                    <p className='end-para'>don't have an account?<Link to='/signup' className='end-link'>Signup Now</Link></p>
                    &nbsp;
                    <button className='end' onClick={displayone}>Sign In</button>

                </div>
            </div>
        </div>
    )
}

export default Login
