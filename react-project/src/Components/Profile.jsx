import React from 'react'
import prof from '../images/sayloreimg8.jpg'
import { AiOutlineDribbble} from 'react-icons/ai'
import { AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoFacebook} from 'react-icons/bi'
import './myprofile.css'

const Profile = () => {

  return (
        <div className='profile'>
            
            <div className='profile-image-pro'>
                <img src={prof} alt="" className='prof-im' />
                <h1>Khalid Al Mazroi</h1>
                <p className='prof-title'>Advocate</p>
                <p>hardWard University</p>
                <div className='profile-icons-prof'>
                    <a href=""><AiOutlineDribbble/></a>
                    <a href=""><AiOutlineTwitter/></a>
                    <a href=""><BiLogoLinkedin/></a>
                    <a href=""><BiLogoFacebook/></a>
                </div>
                <button className='prof-button'>Contact</button>
            </div>   
        </div>
        
  )
}

export default Profile