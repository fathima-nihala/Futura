import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
// import { db } from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // db.collection("post").onSnapshot((snapshot) =>
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     )
        // );
}, []);

const sendPost = (e) => {
    e.preventDefault();
}

return <div className='feed'>
    <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
                <input type='text' />
                <button onClick={sendPost} type='submit  '>Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
            <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7cf15e" />
        </div>
    </div>
    {posts.map((post) => (
        <post />
    ))}
    <Post name='shani' description='This is a test' message='Wow this worked' />
</div>
    
  
}

export default Feed