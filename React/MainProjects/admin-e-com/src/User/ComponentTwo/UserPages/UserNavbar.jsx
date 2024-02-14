import React from 'react'
import './usernav.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import UserLogin from '../../../Login/UserLogin';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';

const UserNavbar = () => {
  const itemaaa = useSelector((state) => state.Login.LoginInfo[0]);

  const [isStcky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  //to add modal login button
  const [order, setOrder] = useState()
  const [proforder, setProfOrder] = useState(false);


  const ModalHandler = () => {
    setOrder(true)
  }

  const hideHandler = () => {
    setOrder(false)
    setProfOrder(false)
  }

  //for modal profile
  const ProfhandleOrderItem = () => {
    setProfOrder(true);
  };

  return (
    <div>
      <div className={`usrnavbar ${isStcky ? 'sticky' : ""}`}>
        <div className='usrnav-logo'>
          <span className='usrnav-logo-one'>O</span><span className='usrnav-logo-two'>Let</span>
        </div>

        <div className="usrnavbar-center">
          <ul className="usrmenu">
            <li><a><Link to='/' style={{ color: ' rgb(230, 8, 156)', textDecoration: 'none' }}>Home</Link></a></li>
            <li><Link to='/all' className='nav-link'>All</Link></li>
            <li><Link to='/women' className='nav-link'>Women</Link></li>


            {/* <li>
              <details>
                <summary className='sum'>Dress</summary>
                <ul className="usrp-2">
                  <li><Link to='/all' className='nav-link'>All</Link></li>
                  <li><Link to='/kids' className='nav-link'>Kids</Link></li>
                  <li><Link to='/men' className='nav-link'>Men</Link></li>
                  <li><Link to='/women' className='nav-link'>Women</Link></li>
                </ul>
              </details>
            </li> */}
            <li><Link to='/kids' className='nav-link'>Kids</Link></li>
            <li><Link to='/men' className='nav-link'>Men</Link></li>

          </ul>
        </div>
        <div className='usrnav-search'>
          <input type="text" placeholder="Search.." name="search" />
          <IoSearchOutline />
        </div>
        <div className="usrnavbar-end">
          <div className='usrnav-end-two'><Link to='/addtocart' className='nav-addto'><LiaShoppingBagSolid className='usernav-ico' /></Link></div>

          {/* <div class="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
        </div> */}
          {/* {itemaaa ? <div className='usrnav-end-one'><BsPerson className='usernav-ico' onClick={ProfhandleOrderItem} /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>} */}
          {itemaaa ? <div className='usrnav-end-one'><img src={`./Profile/${itemaaa.image}`} onClick={ProfhandleOrderItem} className='usernav-ico2' /></div> : <button onClick={ModalHandler} className='usernav-btn'>login</button>}

          {/* <button onClick={ModalHandler}>login</button> */}

        </div>
      </div>
      {order && <UserLogin orderHideHandler={hideHandler} />}
      {proforder && <UserProfile ProforderHideHandler={hideHandler} />}
    </div>
  )
}

export default UserNavbar