import React from 'react'
import { signupData } from '../Redux/Localstorage';
import { useDispatch } from 'react-redux'
import './Signup.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Signup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const formData = {
      name,
      email,
      password
    }
    dispatch(signupData(formData));
    console.log('SignUp data submitted:', formData);
  }
  return (
    <div>
      <div className='main'>
        <div className='title'>
          <h1 style={{ alignItems: 'center' }}>SignUp</h1>
        </div>

        <div className='body'>
          <div className='body2'>
          <form action="" onSubmit={handleFormSubmit}>
            <div className='data'>
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" id='name' name='name' placeholder='Enter your name' required />
            </div>
            <div className='data'>
              {/* <label htmlFor="email">Email:</label> */}
              {/* <b style={{color:'white'}}>Email</b> */}
              <input type="email" id='email' name='email' placeholder='Enter your email' required />
            </div>
            <div className='data1'>
              {/* <label htmlFor="password">Password:</label> */}
              <div className='password-input-container'>
                <input type={showPassword ? 'text' : 'password'} id='password' placeholder="Enter your Password" />
                <span onClick={togglePasswordVisibility} style={{ backgroundColor: '#f1f1f1' }}>{showPassword ? <FaEyeSlash style={{ background: '#f1f1f1', color: 'black' }} /> : <FaEye style={{ background: '#f1f1f1', color: 'black' }} />}</span>
              </div>
            </div>
            <div className='button-data'>
              <button type="submit"><Link to={'/home'} style={{textDecoration:'none',color:' rgb(127, 147, 176)'}}>SignUp</Link></button>
            </div>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Signup