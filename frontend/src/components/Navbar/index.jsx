import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

const Navbar = () => {
      const { isLoggedIn } = useContext(AuthContext)
      const { handleLogout } = useLogout()
      return (
            <nav className='absolute flex justify-between items-center w-full py-8 px-12 bg-transparent z-20'>
                  <div>
                        <a href='/' className='text-2xl font-bold'>
                              <span className='text-red-600'>Vegas</span>
                              <span className='text-white'>Blog</span>
                        </a>
                  </div>
                  <div className='relative'>
                        <input type='text' placeholder='Search Blog...' className='py-2 px-6 w-sm font-semibold text-white bg-white/25 rounded-md' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className='absolute top-1.5 right-5' viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                  </div>
                  <div>
                        {isLoggedIn
                              ?
                              <button onClick={handleLogout} className='py-2 px-6 font-semibold text-black bg-white rounded-md cursor-pointer'>Log Out</button>
                              :
                              <>
                                    <Link to={'/register'} className='py-2 px-6 font-semibold text-white'>Sign Up</Link>
                                    <Link to={'/login'} className='py-2 px-6 font-semibold text-black bg-white rounded-md'>Log In</Link>
                              </>
                        }
                  </div>
            </nav>
      )
}

export default Navbar