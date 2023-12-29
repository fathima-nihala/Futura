import React from 'react'
import './Login.css'
import facebook_text_logo from './Images/facebook-text.png'
import { Link } from '@mui/material'
// import { auth, provider } from "./firebase"
function Login() {
  const signIn = () => {
    

  }
  return <div className='login'>
    <div className='login_logo'>
      <img src='https://www.facebook.com/images/fb_icon_325x325.png'
        alt='
        '/>

      <img
        src={facebook_text_logo}
        alt=''
      />
    </div>

    <button type='submit' onClick={signIn}>sign In</button>
    <p className='log-p'>don't have an account yet?<Link to='/facebook-signup' style={{ textDecoration: 'none' }}>Sign Up</Link>now</p>
  </div>


}

export default Login