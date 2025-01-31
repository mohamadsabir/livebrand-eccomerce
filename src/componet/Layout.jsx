import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'



function Layout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <Outlet />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
