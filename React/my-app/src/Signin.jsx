import React from 'react'
import './Signin.css';
import image from './assets/im2.png'

function Signin() {
  return (
    <div className='container'>
      <div className='body'>
        <h1>Signin</h1> <br/>
       <input type="email" placeholder="Enter User email"  pattern="[a-z0-9._+-%]+@[a-z0-9.-]" required /><br />
       <input type="password" placeholder="Enter Password"  required /> <br />
       <a href="">Forgot password?</a><br />
        <button>Signin</button> <br />
        <p>Don't have an account?<a href="SignUp.jsx">SignUp now</a></p>
        </div>
    </div>
  )
}

export default Signin