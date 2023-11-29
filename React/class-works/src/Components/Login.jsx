import React, { useState } from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { LoginDetails } from './ApiCall';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch=useDispatch()

    const displayone = async () => {
        console.log({ email, password });
        try {
            LoginDetails({ email, password }, dispatch)
        } catch (error) {
            console.log('error in passs',error);
        }
    }
    // const data=useSelector((state)=>state.Login.loginInfo)
    // console.log("hello errorrr",data);

    
  return (
    <div className='signup'>
         <img src="https://as2.ftcdn.net/v2/jpg/06/14/07/19/1000_F_614071960_1flTsdIUoTMK9JgaiXiqZv7yAwa1XXwy.jpg" alt="" className='signup_bg' />
         <div className='signup_form'>
            <h1 className='signup_title'>Login</h1>
            <div className="signup_inputs">
            <div className="signup_box">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <MdOutlineMailOutline style={{color:"gray"}}/>
                </div>
                <div className="signup_box">
                <input type="password" placeholder="Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <RiLockPasswordLine style={{color:"gray"}}/>
                </div>
                </div>
                <div className='signup_button'>
                <button type='submit' className='signup_button_btn' onClick={displayone}>Login</button>
            </div>
                </div>
    </div>
  )
}

export default Login
