import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";
import SignUp from "./SignUp";


const Login = () => {

    const [combinedinput, setCombinedinput] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if combinedinput is a string and not empty
        if (typeof combinedinput === 'string' && combinedinput !== '') {
            // Split the input value by comma to separate mobile number and email address
            const [mobileNumber, email] = combinedinput.split(',');

            console.log('Mobile Number:', mobileNumber);
            console.log('Email:', email);
            console.log('Password:', password);
        }
        else {
            // Handle empty or non-string input
            console.error('Combined input is empty or not a string.');
        }
    }
    const [order, setOrder] = useState(false);
    const handleOrderItem = () => {
        setOrder(true);
    };

    const hideHandler=()=>{
        setOrder(false)
    }
    return (
        <div className="login-main">
            <div className="login-top">
                <div className="login-top-left">
                    <img src='https://www.facebook.com/images/fb_icon_325x325.png' />
                    <span className="fb-logo">facebook</span>
                    <span className="fb-p">Facebook helps you connect and share <br /> with the people in your life.</span>
                </div>
                <div className="login-top-right">
                    <div className="login-container">
                        <div className="login-container-top">
                            <input
                                type='text'
                                placeholder='Mobile number or Email address'
                                value={combinedinput}
                                onChange={(e) => setCombinedinput(e.target.value)}
                                required />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />                            <div>
                                <button>Log in</button>
                            </div>
                            <Link to={'/forgot'}>
                                <span className="forgotten-pass">Forgotten password?</span>
                            </Link>

                        </div>
                        <div className="login-container-bottom">
                            {/* <Link to={'/signup'}> */}
                            <button onClick={handleOrderItem} >Create new account</button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <span>Create a Page for a celebrity, brand or business.</span>
                </div>
            </div>
            <div className="login-bottom">
                <div className="login-bottom-top">
                    <ul>
                        <li>English</li>
                        <li>മലയാളം</li>
                        <li>தமிழ்</li>
                        <li>ಕನ್ನಡ</li>
                        <li>हिन्दी</li>
                        <li>اردو</li>
                        <li>বাংলা</li>
                        <li>తెలుగు</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                    </ul>
                </div>
            </div>
            {order && <SignUp orderHideHandler={hideHandler}/>}
        </div>
    );
};

export default Login;
