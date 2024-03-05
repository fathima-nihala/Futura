import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../ContentItem/AdminFooter'
import AdminNavbar from '../ContentItem/AdminNavbar'

const Contents = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Contents