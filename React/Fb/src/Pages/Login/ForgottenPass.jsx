import React, { useState } from 'react'
import facebook from '../Images/facebook-text.png'
import './ForgottenPass.css'
import { Link } from 'react-router-dom';

// style={{height:110,width:130,objectFit:'cover'}}
const ForgottenPass = () => {
  const [combinedinput, setCombinedinput] = useState('');

  if (typeof combinedinput === 'string' && combinedinput !== '') {
    const [mobileNumber, email] = combinedinput.split(',');
    console.log('Mobile Number:', mobileNumber);
    console.log('Email:', email);
  }
  else {
    // Handle empty or non-string input
    console.error('Combined input is empty or not a string.');
  }

  return (
    <div className='forget-pass'>
      <div className='forget-nav'>
        <img src={facebook} />
      </div>
      <div className='forgot-body'>
        <div className='forgot-body-container'>
          <h4>Find Your Account</h4>
        </div>
        <div className='forget-body-search'>
          <p>Please enter your email address or mobile number to search  <br /> for your account.</p>
          <input
            type='text'
            placeholder='Mobile number or Email address'
            value={combinedinput}
            onChange={(e) => setCombinedinput(e.target.value)}
            required />
        </div>
        <div className='forgot-btns'>
          <div className='forgot-btns-one'><button><Link to='/' style={{textDecoration:'none',color:'#4b4f56'}}>Cancel</Link></button></div> &nbsp;
          <div className='forgot-btns-two'><button>Search</button></div>
        </div>
      </div>
    </div>
  )
}

export default ForgottenPass