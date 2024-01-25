import React from 'react'
import UserBanner from '../UserBanner'
import UserBestSeller from '../UserPages/UserBestSeller'
import UserPopularProducts from '../UserPages/UserPopularProducts'
import OurStory from '../UserPages/OurStory'

const UserHome = () => {
  return (
    <div>


        <UserBanner/>
        <UserBestSeller/>
        <UserPopularProducts/>
        <OurStory/>
        {/* testimonial */}
    

    </div>
  )
}

export default UserHome