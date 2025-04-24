import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
      return (
            <div className='relative w-full'>
                  <header className=' absolute inset-0 w-full max-w-screen-2xl mx-auto'>
                        <Navbar />
                  </header>
                  <main className='relative p-3 '>
                        <Outlet />
                  </main>
            </div>
      )
}

export default MainLayout