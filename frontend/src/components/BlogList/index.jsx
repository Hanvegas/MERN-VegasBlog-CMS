import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ children }) => {
      return (
            <div className='w-full max-w-screen-2xl mx-auto mt-9 px-8'>
                  <div className='flex justify-between items-center'>
                        <div>
                              <h1 className='text-4xl font-semibold mb-2'>Blog</h1>
                              <p className='font-medium text-lg text-black/50 mb-8'>Explore the glamour and culture of the casino world — beyond the games.</p>
                        </div>
                        <Link to={"/create"} className='py-2 px-6 font-semibold text-white bg-black border-2 mr-4 rounded-md hover:bg-white hover:text-black hover:border-black transition-all duration-200'>Add New Blog</Link>
                  </div>
                  <div className='grid grid-cols-3 gap-8'>
                        {children}
                  </div>
            </div>
      )
}

export default BlogList