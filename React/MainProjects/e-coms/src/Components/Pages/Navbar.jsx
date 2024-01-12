import React from 'react'
import './navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isStcky,setSticky]=useState(false);

  useEffect(()=>{
      const handleScroll=()=>{
        const offset=window.scrollY;
        if (offset > 0) {
          setSticky(true)
        }else{
          setSticky(false)
        }
      };
      window.addEventListener("scroll",handleScroll);

      return()=>{
        window.addEventListener("scroll",handleScroll);
      }
  },[])

  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <span className='nav-logo-one'>O</span><span className='nav-logo-two'>Let</span>
        </div>
     
  <div className="navbar-center">
    <ul className="menu">
        <li><a><Link to='/'  style={{color:' rgb(230, 8, 156)',textDecoration:'none'}}>Home</Link></a></li>
      <li><a>Electronics</a></li>
      <li>
        <details>
          <summary className='sum'>Dress</summary>
          <ul className="p-2">
            <li><a>Kids</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
          </ul>
        </details>
      </li>
      <li><a>Beauty</a></li>
    </ul>
  </div>
    <div className='nav-search'>
    <input type="text" placeholder="Search.." name="search"/>
    <IoSearchOutline />
    </div>
  <div className="navbar-end">
    <div className='nav-end-one'><BsPerson className='nav-ico'/></div>
    <div className='nav-end-two'><LiaShoppingBagSolid className='nav-ico'/></div>
  </div>
    </div>
  )
}

export default Navbar
