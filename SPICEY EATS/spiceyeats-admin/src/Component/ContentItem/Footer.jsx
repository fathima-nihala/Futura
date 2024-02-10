import React from 'react'
import './footer.css'
import { FaArrowUpLong } from "react-icons/fa6";


const Footer = () => {

        const handleSrollTop=()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });

    }
  return (
  
        <div className="footer">
        <div className="footer-logo">
           <div className="foot-logo"><span className="logo1">SPIC<span className="logo1-sub1">E</span>Y<span className="logo1-sub1">E</span>ATS</span>
           </div>
           <div className="ico" onClick={handleSrollTop}><FaArrowUpLong className='ico-up'/></div>
        </div>
        <div className="foot-cntnts">
            <div className="foot-cntnts-1">
                Home/ Blog/ Sale/ <br />  About us/ For Customers/ <br /> Contact Now
            </div>
            <div className="foot-cntnts-1">
                <p className="foot-item">CONTACT US</p>
                <p>+1234567890</p>
                <p className="foot-item">EMAIL</p>
                <p>spiceyeats@gmail.com</p>
            </div>
            <div className="foot-cntnts-1">
                <p className="foot-item">ADDRESS</p>
                <p>+2118 bridge conneticut35624</p>
                <p className="foot-item">OPENING HOUR</p>
                <p>9am-6pm</p>
            </div>
            <div className="foot-cntnts-1">
                @2023-copyright
            </div>           
        </div>
    </div>
   
  )
}

export default Footer