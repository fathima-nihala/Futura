import React from 'react'
import './Story.css'

const Story = ({image,profileSrc,title}) => {
  return (
    <div style={{backgroundImage:`url(${image})`}} className='story'>
          <img src={profileSrc} className='story_avatar'/> 
        <h4>{title}</h4>
    </div>
  )
}

export default Story