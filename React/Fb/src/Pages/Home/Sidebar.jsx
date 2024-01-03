import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import niha from '../Images/niha.jpeg'
import { MdLocalHospital } from "react-icons/md";
import { FiFlag } from "react-icons/fi";
import { MdPeople } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className='sidebar'>
         <SidebarRow src={niha} title='Shanihala'/>
    <SidebarRow Icon={MdLocalHospital } title="COVID-19 Information Center"/>
    <SidebarRow Icon={FiFlag } title="Pages"/>
    <SidebarRow Icon={MdPeople }  title="Friends"/>
    <SidebarRow  Icon={MdChat } title="Messenger"/>
    <SidebarRow  Icon={MdOutlineStorefront} title="Marketplace"/>    
    <SidebarRow Icon={MdVideoLibrary } title="videos"/>
    <SidebarRow Icon={MdExpandMore} title="marketplace"/>
    </div>
  )
}

export default Sidebar