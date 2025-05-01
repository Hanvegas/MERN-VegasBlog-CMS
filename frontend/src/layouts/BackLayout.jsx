import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BackLayout = () => {
      return (
            <div className=''>
                  <header className='absolute inset-0 w-full h-10 max-w-screen-2xl mx-auto mt-9 px-15 z-10'>
                        <Link to={'/blog'} className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000000" viewBox="0 0 256 256"><path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path></svg>
                        </Link>
                  </header>
                  <main className='relative'>
                        <Outlet />
                  </main>
            </div>
      )
}

export default BackLayout