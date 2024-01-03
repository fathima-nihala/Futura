import React from 'react'
import './Header.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoFlag } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdForum } from "react-icons/md";
import { IoPersonCircle} from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='' />
                <div className='header_input'>
                    <IoSearchSharp />
                    <input type='text' placeholder='Search Facebook' />
                </div>
            </div>
            <div className='header_center'>
                <div className='header_option header_option--active'>
                    <IoMdHome className='react-icons'/>
                </div>
                <div className='header_option'>
                    <IoFlag  className='react-icons' />
                </div>
                <div className='header_option'>
                    <MdSubscriptions className='react-icons' />
                </div>
                <div className='header_option'>
                    <MdOutlineStorefront className='react-icons' />
                </div>
                <div className='header_option'>
                    <MdSupervisedUserCircle className='react-icons' />
                </div>
            </div>
            <div className='header_right'>
                <div className='header_info'>
                    <IoPersonCircle  fontSize='32' style={{color:'gray'}}/>
                    <h4>shanihala</h4>
                </div>
                <div className='header-right-icons'>
                    <IoMdAdd  fontSize='25' style={{color:'gray'}}/>
                </div>
                <div className='header-right-icons'>
                    <MdForum fontSize='25' style={{color:'gray'}} />
                </div>
                <div className='header-right-icons'>
                    <MdNotificationsActive fontSize='25' style={{color:'gray'}} />
                </div>
                <div className='header-right-icons'>
                    <MdExpandMore fontSize='25' style={{color:'gray'}}/>
                </div>
            </div>
        </div>
    )
}

export default Header