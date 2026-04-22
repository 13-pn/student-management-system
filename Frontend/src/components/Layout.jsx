import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen">

  
      <div className="h-16 fixed top-0 left-0 w-full z-50" style={{backgroundColor:'green'}}>
        <Header />
      </div>

      <div
       className="fixed top-16 left-0 w-full md:w-1/4 bg-green-500 overflow-y-auto h-[6vh] border md:h-[100vh]" style={{backgroundColor:'green'}}>
       <Sidebar />
      </div>

      <div className="pb-16 md:ml-[25%] md:h-screen md:overflow-y-auto">
        <div className="md:pt-[4rem] pt-[6.5rem] md:pb-[1rem] pb-[1.5rem]">
          <Outlet />
        </div>
      </div>


      <div className="fixed bottom-0 left-0 w-full z-50 border">
        <Footer />
      </div>

    </div>
  )
}

export default Layout