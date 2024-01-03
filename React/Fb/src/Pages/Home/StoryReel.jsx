import React from 'react'
import './StoryReel.css'
import Story from './Story'
import aswathi from '../Images/aswathi.jpeg'
import aswathi1 from '../Images/aswathi1.jpeg'
import nihala from '../Images/nihala.jpeg'
import nihala1 from '../Images/nihala1.jpeg'
import amegh from '../Images/amegh.jpeg'
import amegh1 from '../Images/amegh1.jpeg'
import abhinav from '../Images/abhinav.jpeg'
import kashyap from '../Images/kashyap.jpeg'
import kashyap1 from '../Images/kashyap1.jpeg'
import abhinav1 from '../Images/abhinav1.jpeg'
const StoryReel = () => {
  return (
    <div className='storyReel'>
         <Story
            image={aswathi1}
            profileSrc={aswathi}
            title="Aswathi"
        />
         <Story
            image={kashyap1}
            profileSrc={kashyap}
            title="Kashyap"
        />
         <Story
            image={amegh1}
            profileSrc={amegh}
            title="Amegh"
        />
         <Story
            image={nihala1}
            profileSrc={nihala}
            title="Nihala"
        />
         <Story
            image={abhinav}
            profileSrc={abhinav1}
            title="Abhinav Rejilnad"
        />
    </div>
  )
}

export default StoryReel