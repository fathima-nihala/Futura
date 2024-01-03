import React, { useState } from 'react'
import './MessageSender.css'
import { IoPersonCircle} from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { MdInsertEmoticon } from "react-icons/md";

const MessageSender = () => {
    const[input,setInput]=useState("");
    const[imageUrl,setImageUrl]=useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        //some clever db stuff
        //enter adilkumbo input field nn contents poghaan
        setInput("");
        setImageUrl("");
    }
  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
            <IoPersonCircle/>
        <form>
            <input 
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            placeholder={`Whats on your mind?`} className='messageSender_input'
            />

            <input 
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder='image URL (Optional)'
            />

            <button onClick={handleSubmit} type='submit'>
            Hidden submit
            </button>

        </form>
    </div>
    <div className='messageSender_bottom'>
        <div className='messageSender_option'>
            <IoIosVideocam  style={{color:"red"}}/>
            <h3>Live Video</h3>
        </div>
        <div className='messageSender_option'>
            <MdPhotoLibrary  style={{color:"green"}}/>
            <h3>Photo/Video</h3>
        </div>
        <div className='messageSender_option'>
            <MdInsertEmoticon  style={{color:"orange"}}/>
            <h3>Feeling/Activity</h3>
        </div>
    </div>
    </div>
  )
}

export default MessageSender