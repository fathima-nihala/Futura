import React from 'react'
import './LoginSignUp.css'
import {BsFillPersonFill} from 'react-icons/bs'
import  { MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useState } from 'react'

const LoginSignUp = () => {
    const[action,setAction]=useState("Login")
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    if (action === 'Login') {
      // Perform login action here
    } else {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('isSignedUp', true);

         // Optionally, you can clear the input fields after saving the data.
    setName('');
    setEmail('');
    setPassword('');
    }
  };

 
//   const handleLogin = () => {
//     setAction("Login");
//     handleFormSubmit();
//   };
 
    
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
                <BsFillPersonFill  style={{width:60}}/>
                <input type="text" placeholder='Name'   value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>}
            
            </div>
        <div className="inputs">
            <div className="input">
                <MdEmail  style={{width:60}}/>
                <input type="email" placeholder='Email Id'  value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </div>
        <div className="inputs">
            <div className="input">
                <RiLockPasswordFill style={{width:60}}/>
                <input type="password" placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up"); handleFormSubmit();}}>SignUp</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login");}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp