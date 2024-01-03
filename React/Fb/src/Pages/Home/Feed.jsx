import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import amegh from'../Images/amegh.jpeg'
import kashyap from '../Images/kashyap.jpeg'
import aswathi from '../Images/aswathi.jpeg'
const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post 
        profilePic={amegh}
        message='Wow this works!'
        timestamp='this is a timestamp'
        username='Amegh T S'
        image="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png"
        />
        
        <Post
         profilePic={kashyap}
         message='Lol its Cool!'
         timestamp='this is a timestamp'
         username='Kashyap'
         image="https://media.licdn.com/dms/image/D5612AQGrzOH88tRX0g/article-cover_image-shrink_600_2000/0/1680750255065?e=2147483647&v=beta&t=wSOD7HKb5u9iwF9cmw8bbVCe5y621C9s5EsGIGXrhas"
        />
        <Post
        profilePic={aswathi}
        message='Emotionally perfect'
        timestamp='this is a timestamp'
        username='Aswathi K'
        image="https://finetofab.com/wp-content/uploads/2017/09/ftf-july5.jpg"
        />

    </div>
  )
}

export default Feed