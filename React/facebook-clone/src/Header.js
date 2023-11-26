import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import { Avatar, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://www.facebook.com/images/fb_icon_325x325.png' alt=''/>
            <div className='header_input'>
                <SearchIcon/>
                <input type='text' placeholder='Search Facebook'/>
            </div>
        </div>
        <div className='header_center'>
            <div className='header_option header_option--active'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <StorefrontIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>
        <div className='header_right'>
            <div className='header_info'>
                <Avatar/>
                <h4>shanihala</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>


    </div>
  )
}

export default Header