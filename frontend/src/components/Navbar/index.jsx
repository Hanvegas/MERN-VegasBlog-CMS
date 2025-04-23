import React from 'react'

const Navbar = () => {
      return (
            <nav className='absolute flex justify-between items-center w-full py-8 px-12 bg-transparent'>
                  <div>
                        <a href='/' className='text-2xl font-bold'>
                              <span className='text-red-600'>Vegas</span>
                              <span>Blog</span>
                        </a>
                  </div>
                  <div>
                        <input type='text' placeholder='Search Blog...' className='py-2 px-6 font-semibold bg-white opacity-30 border-white rounded-md' />
                  </div>
                  <div>
                        <button className='py-2 px-6 font-semibold text-white'>Sign Up</button>
                        <button className='py-2 px-6 font-semibold text-black bg-white rounded-md'>Log In</button>
                  </div>
            </nav>
      )
}

export default Navbar