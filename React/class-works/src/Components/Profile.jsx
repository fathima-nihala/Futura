import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { AiOutlineDribbble} from 'react-icons/ai'
import { AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoFacebook} from 'react-icons/bi'
import { removeData } from '../Redux/userRedux';

const Profile = () => {

const data=useSelector((state)=>state.Login.loginInfo)
   console.log("all is well",data);

   const dispatch=useDispatch()
   function Logout(){
    dispatch(removeData())


   }
  return (
    <div className='prof_container'>  
        <div className='prof-contents'>
            <h1>Profile</h1>
            <div className='card'>
           {data.map((datas)=>{
            return(
                <div>
                    <h1>{datas.firstname}</h1>
                    <h4>{datas.email}</h4>
                    <h5>{datas.phone}</h5>
                </div>
            )
           })}
           <div className='profile-icons-prof'>
                    <a href=""><AiOutlineDribbble/></a>
                    <a href=""><AiOutlineTwitter/></a>
                    <a href=""><BiLogoLinkedin/></a>
                    <a href=""><BiLogoFacebook/></a>
           </div>
           <button className='prof-button' onClick={Logout}>Logout</button>
        </div>
        </div>
    </div>
  )
}

export default Profile