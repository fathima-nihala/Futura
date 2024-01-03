import React from 'react'
import './Post.css'
import { MdThumbUp } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdNearMe } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const Post = ({profilePic,image,username,timestamp,message}) => {
  return (
    <div className='post'>
        <div className='post_top'>
        <img src={profilePic} className='post_avatar'/>
        <div className='post_topInfo'>
            <h3>{username}</h3>
            <p>Timestamp...</p>
        </div>
        </div>
        <div className='post_bottom'>
            <p>{message}</p>
        </div>
        <div className='post_image'>
           <img src={image} alt=''/>
        </div>
        <div className='post_options'>
            <div className='post_option'>
                <MdThumbUp />
                <p>Like</p>
            </div>
            <div className='post_option'>
                <MdChatBubbleOutline />
                <p>comment</p>
            </div>
            <div className='post_option'>
                <MdNearMe />
                <p>Share</p>
            </div>
            <div className='post_option'>
                <MdAccountCircle />
                <MdExpandMore/>
            </div>
        </div>
    </div>
  )
}

export default Post