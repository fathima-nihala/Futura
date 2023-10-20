import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi'
import './Home.css'

import React, {  useState } from 'react'
import Main from "./Main";
import Cart from "./Cart";
import Display from "./Display";


const Home = () => {
    const [state, setstate] = useState([]);
    const[activeNav,setActiveNav]=useState(0);
    const [productDetails,setProductDetails]=useState(null);



    const handleNavigationClick=(index)=>{
        setActiveNav(index);
     }
    return (
        <div className="brdr">
            <link href='https://fonts.googleapis.com/css?family=Covered By Your Grace' rel='stylesheet'></link>
            <div className='nav'>
                <div className='nav-main'>
                    <div className='nav-content' >
                        <div className='logo'><h1><span className='s'>S</span>aylore</h1></div>
                        <div className='search-button'>
                            <input type="text" placeholder="Search saylor" name="search" />
                            <BsSearch />
                        </div>
                        <div className="content"><button className='btn' onClick={()=>handleNavigationClick(0)}>Home</button></div>
                        <div className="content"><button className='btn'>Shop</button></div>
                        <div className="content"><button className='btn'>AboutUs</button></div>
                        <div className="content"> <button className='btn'>Contacts</button></div>
                        <div className="person-cart-icon">
                        <div class="dropdown">
                            <button className="drop-button"><BsPerson style={{ fontSize: 26, color: ' black' }} /></button>
                            <div className="dropdown-content">
                                <a href="#"><Link to={'/Signup'}>SignUp</Link></a>
                                <a href="#"><Link to={'/prof'}>My Profile</Link></a>
                                <a href="">Logout</a>
                            </div>
                            </div>
                        <button className='cart'onClick={()=>handleNavigationClick(1)}><Link><BiCart style={{ fontSize: 26, color: ' black' }} />{state}</Link></button>
                        </div>
                    </div>
                </div>
              
            </div>
                <div>
                    {activeNav===1 && <div><Cart/></div>}
                    {activeNav===0 && <div><Main setActivnav={setActiveNav} setProductDeatails={setProductDetails}/></div>}
                    {activeNav===2 &&  <div><Display productDetails={productDetails}/></div>} 
                   
                </div>
        </div>
    )
}

export default Home