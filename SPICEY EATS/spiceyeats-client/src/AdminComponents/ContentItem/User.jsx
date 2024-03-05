import React from 'react'

const User = () => {
  return (
    <div>
      <div className='users' >
        <h3 className='user-head'>User<span className='user-head-sub'>Details</span></h3>
        <div className='use-body-one'>
          <div className='tab-hed'>Profile</div>
          <div className='tab-hed'>UserName</div>
          <div className='tab-hed'>EmailAddress</div>
          <div className='tab-hed'>Remove</div>
        </div>
        <div className='use-body-two'>
        </div>
      </div>
    </div>
  )
}

export default User