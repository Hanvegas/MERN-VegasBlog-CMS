import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
      return (
            <div className='w-full h-screen bg-white p-3'>
                  <div className='relative flex justify-center items-center w-full h-full bg-white rounded-xl '>
                        <div className='absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5 rounded-xl'></div>
                        <div className='absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 rounded-xl'></div>
                        <div className='relative flex items-center'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#ff1919" viewBox="0 0 256 256"><path d="M112,116a12,12,0,1,1-12-12A12,12,0,0,1,112,116Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,156,104Zm68,16v96a8,8,0,0,1-13.07,6.19l-24.26-19.85L162.4,222.19a8,8,0,0,1-10.13,0L128,202.34l-24.27,19.85a8,8,0,0,1-10.13,0L69.33,202.34,45.07,222.19A8,8,0,0,1,32,216V120a96,96,0,0,1,192,0Zm-16,0a80,80,0,0,0-160,0v79.12l16.27-13.31a8,8,0,0,1,10.13,0l24.27,19.85,24.26-19.85a8,8,0,0,1,10.14,0l24.26,19.85,24.27-19.85a8,8,0,0,1,10.13,0L208,199.12Z"></path></svg>
                              <Link to={"/"} className='ml-4 text-5xl font-semibold hover:text-red-500 hover:scale-95'>Page not Found</Link>
                        </div>
                  </div>
            </div>
      )
}

export default NotFound