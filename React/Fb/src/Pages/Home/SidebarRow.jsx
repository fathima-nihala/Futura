import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({src,Icon,title}) => {
  return (
    <div className='sidebarRow'>
         {src && <img  src={src} />}
    {Icon && <Icon className='react-icons'/>}
    <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow