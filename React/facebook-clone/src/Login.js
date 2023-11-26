import React from 'react'
import './Login.css'
import facebook_text_logo from './Images/facebook-text.png'

function Login() {
    const signIn=()=>{
        //sign In....
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
  </div>
    
  
}

export default Login