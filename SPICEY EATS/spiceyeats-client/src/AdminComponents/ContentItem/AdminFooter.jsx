import React from 'react'
import './footer.css'
import { FaArrowUpLong } from "react-icons/fa6";


const AdminFooter = () => {

        const handleSrollTop=()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            });

    }
  return (
  
        <div className="adminfooter">
        <div className="adminfooter-logo">
           <div className="adminfoot-logo"><span className="logo1">SPIC<span className="logo1-sub1">E</span>Y<span className="logo1-sub1">E</span>ATS</span>
           </div>
           <div className="adminico" onClick={handleSrollTop}><FaArrowUpLong className='ico-up'/></div>
        </div>
        <div className="adminfoot-cntnts">
            <div className="adminfoot-cntnts-1">
                Home/ Blog/ Sale/ <br />  About us/ For Customers/ <br /> Contact Now
            </div>
            <div className="adminfoot-cntnts-1">
                <p className="adminfoot-item">CONTACT US</p>
                <p>+1234567890</p>
                <p className="adminfoot-item">EMAIL</p>
                <p>spiceyeats@gmail.com</p>
            </div>
            <div className="adminfoot-cntnts-1">
                <p className="adminfoot-item">ADDRESS</p>
                <p>+2118 bridge conneticut35624</p>
                <p className="adminfoot-item">OPENING HOUR</p>
                <p>9am-6pm</p>
            </div>
            <div className="adminfoot-cntnts-1">
                @2023-copyright
            </div>           
        </div>
    </div>
   
  )
}

export default AdminFooter