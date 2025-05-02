import React from 'react'

const BlogList = ({ children }) => {
      return (
            <div className='w-full max-w-screen-2xl mx-auto mt-9 px-8'>
                  <div>
                        <h1 className='text-4xl font-semibold mb-2'>Blog</h1>
                        <p className='font-medium text-lg text-black/50 mb-8'>Explore the glamour and culture of the casino world — beyond the games.</p>
                  </div>
                  <div className='grid grid-cols-3 gap-8'>
                        {children}
                  </div>
            </div>
      )
}

export default BlogList