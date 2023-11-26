import React, { useState } from 'react'
import './Login.css'
import { loginData } from './ApiCall';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const dispatch=useDispatch()

    const display = async () => {
        console.log({ email, password });
        try {
            loginData({ email, password }, dispatch)
        } catch (error) {
            console.log('error in passs',error);
        }
    }

    //local storage le data console l veran.
    const data=useSelector((state)=>state.Login.loginInfo)
    console.log('***',data);

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
                        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
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