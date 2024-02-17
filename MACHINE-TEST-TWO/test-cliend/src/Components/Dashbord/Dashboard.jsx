import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { IoIosHome } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='dashboard'>
                   <div className='dashboard-main'>
                <div className='dashboard-cntnts'>
                    <div className='dashboard-title'><span className='dashboard-title-one'>O</span><span className='dashboard-title-two'>Let</span></div>
                    <div className='dashboard-link'>
                        <p className='link-p'><IoIosHome />
                           Dashboard</p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><FaEdit />
                            ManageItems</p>
                    </div>
                    <div className='dashboard-link'>
                        <p className='link-p'><IoIosAddCircle />
                            AddItems</p>
                    </div>
                    {/* <div className='dashboard-link'>
                        <p className='link-p-drop'><PiUsersThreeFill />
                            User</p>
                        
                    </div> */}
                    <details>
              <summary className='sum'>
              <PiUsersThreeFill /> user
              </summary>
              <ul className="usrp-2">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Update</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </details>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
