import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignupData } from '../API/ApiCall'

const SignUp = () => {
  const [firstname, setfirstname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const display = (e) => {
    e.preventDefault()

    SignupData({firstname,email,password})
  }
  return (
    <div>
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
          {/* <h2>&nbsp;</h2> */}
          <p className='end-para'>already have an account?<Link to='/login' className='end-link'>Signin Now</Link></p>
          &nbsp;
          <button className='end' onClick={display}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
