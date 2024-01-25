import React from 'react'
import Banner from '../UserPages/Banner'
import NewCollection from '../UserPages/NewCollection'
import Popular from '../UserPages/Popular'

const UserHome = () => {
  return (
    <div>
      <Banner/>
      <NewCollection/>
      <Popular/>
    </div>
  )
}

export default UserHome
