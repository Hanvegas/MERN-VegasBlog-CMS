import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'

const Navbar = () => {
      const { isLoggedIn } = useContext(AuthContext)
      const { handleLogout } = useLogout()
      return (
            <nav className='sticky top-3 flex justify-between items-center w-full py-6 px-12 bg-white/30 backdrop-blur-md rounded-full z-20'>
                  <div>
                        <a href='/blog' className='text-3xl font-bold'>
                              <span className='text-red-600'>Vegas</span>
                              <span className='text-black'>Blog</span>
                        </a>
                  </div>
                  <div className='relative hover:scale-105 transition-all duration-300'>
                        <input type='text' placeholder='Search Blog...' className='py-2 px-6 w-sm font-semibold bg-white rounded-md' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000000" className='absolute top-1.5 right-5' viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                  </div>
                  <div>
                        {isLoggedIn
                              ?
                              <>
                                    <Link to={"/create"} className='py-2 px-6 font-semibold text-black bg-white border-2 border-white mr-4 rounded-md hover:bg-black hover:text-white hover:border-black transition-all duration-200'>Add New Blog</Link>
                                    <button onClick={handleLogout} className='py-2 px-6 font-semibold text-white bg-black border-2 border-black rounded-md cursor-pointer hover:bg-white hover:border-2 hover:border-white hover:text-black transition-all duration-200'>Log Out</button>
                              </>
                              :
                              <>
                                    <Link to={'/register'} className='py-2 px-6 font-semibold text-black bg-white border-2 border-white hover:border-2 hover:border-black hover:text-white hover:bg-black rounded-md mr-4 transition-all duration-200'>Sign Up</Link>
                                    <Link to={'/login'} className='py-2 px-6 font-semibold text-white bg-black border-2 border-black rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-white duration-200 '>Log In</Link>
                              </>
                        }
                  </div>
            </nav>
      )
}

export default Navbar