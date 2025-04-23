import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
      return (
            <>
                  <header>
                        <Navbar />
                  </header>
                  <main className='relative p-3'>
                        <Outlet />
                  </main>
            </>
      )
}

export default MainLayout