import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import {BiCart} from 'react-icons/bi'
import './Home.css'
import SayloreBody from './SayloreBody';
import mainimg1 from './images/sayloreimg1.jpg'
import  mainimg2 from './images/sayloreimg2.jpg'
import mainimg3 from './images/sayloreimg3.jpg'
import mainimg4 from './images/sayloreimg4.jpg'
import mainimg from './images/sayloreimg6.jpg'
import mainimg5 from './images/sayloreimg.jpg'


const Home = () => {

    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Amarante' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Covered By Your Grace' rel='stylesheet'></link>
            <div className='nav'>
                <div className='nav-main'>
                    <div className='nav-content' >
                        <div className='logo'><h1 style={{fontFamily:'Amarante',fontSize:'21'}}><span className='s'>S</span>aylore</h1></div>
                        <div className='search-button'>
                        <input type="text" placeholder="Search saylor" name="search"/>
                        <BsSearch/ >
                        </div>
                        <div className="content"><button className='btn' style={{backgroundColor:'white',border:'none'}}><p className='content-p'>Home</p></button></div>
                        <div className="content"><button className='btn' style={{backgroundColor:'white',border:'none'}}><p className='content-p'>Shop</p></button></div> 
                        <div className="content"><button className='btn' style={{backgroundColor:'white',border:'none'}}><p className='content-p'>AboutUs</p></button></div>
                        <div className="content"> <button className='btn' style={{backgroundColor:'white',border:'none'}}><p className='content-p'>Contacts</p></button></div>
                        <div class="dropdown">
                        <button class="drop-button"><BsPerson style={{ fontSize: 26, color: ' black' }} /></button>
                        <div class="dropdown-content">
                        <a href="#"><Link to={'/Signup'}>SignUp</Link></a>
                        <a href="#">Signin</a>
                        </div>
                        </div>
                        <button className='cart'><Link><BiCart style={{ fontSize: 26, color: ' black' }}/></Link></button>
                    </div>
                </div>
                {/* --------------nav-main-------------------- */}
                <div className='catagories'>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Men</a></p></button>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Women</a></p></button>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Kids</a></p></button>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Jewelleri</a></p></button>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Beauty</a></p></button>
                    <button className='catagies-contents' style={{backgroundColor:'white',border:'none'}}><p className='catagies-contents-p'><a href="">Electronics</a></p></button>
                </div>
                {/* -----------------categories----------------- */}
                <div className='saylore-main'>
                    <img src={mainimg} alt="" />
                    <div className='saylore-main-sub'>
                        <img src={mainimg3} alt="" />
                        <img src={mainimg4} alt=""/>
                        <img src={mainimg1} alt="" />
                        <img src={mainimg2} alt=""/>
                        <img src={mainimg5} alt="" />
                    </div>
                </div>
                <div className='saylore-collections'>
                <SayloreBody/>
                </div>
            </div>
        </>
    )
}

export default Home