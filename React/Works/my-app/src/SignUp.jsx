import React from 'react'
import './Signin.css'
function SignUp() {
  return (
    <div className='container'>
      <div className='body'>
        <h1>Welcome</h1> <br/>
        <input type="text" placeholder='First Name' /><br />
       <input type="text" placeholder='Last name'/> <br />
       <input type="email" placeholder="Enter User email"  pattern="[a-z0-9._+-%]+@[a-z0-9.-]" required /><br />
       <input type="password" placeholder="Enter Password"  required /> <br />
       <a href="">Forgot password?</a><br />
        <button>SignUp</button> <br />
        <p>Already have an account?<a href="Signin.jsx">Signin</a></p>
        </div>
    </div>
  )
}

export default SignUp