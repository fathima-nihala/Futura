import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginDatass } from '../API/ApiCall'
//
// import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    //
    // const history = useNavigate();


    const dispatch = useDispatch()

    const displayone = () => {
        console.log({ email, password });
        try {
            LoginDatass({ email, password }, dispatch)
        } catch (error) {
            console.log("error in pass", error);
        }
    }

    // const handleLogin = () => {
    //     // Perform authentication logic here and determine the user role
    //     const userRole = 'user'; // Replace with actual authentication logic
    //        if (userRole === 'user') {
    //       history.push('/');
    //     } else if (userRole === 'admin') {
    //       history.push('/');
    //     } else {
    //         history.push('/user');
    //     }
    //   };


    // const handleButtonClick=()=>{
    //     handleLogin();
    //     displayone();
    // }
    return (
        <div>
            <div className="container" onclick="onclick">
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="center">
                    <h2>Please Sign In</h2>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    {/* <h2>&nbsp;</h2> */}
                    <p className='end-para'>don't have an account?<Link to='/signup' className='end-link'>Signup Now</Link></p>
                    &nbsp;
                    <button className='end' onClick={displayone }>Sign In</button>

                </div>
            </div>
        </div>
    )
}

export default Login
