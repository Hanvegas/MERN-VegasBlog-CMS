import React from 'react'

const RecomendedBlog = ({ children }) => {
      return (
            <div className='flex flex-col w-full max-w-screen-2xl'>
                  <h2 className='text-4xl font-bold text-center mb-12'>Best Article Chosen for You</h2>
                  <div className='grid grid-cols-3 gap-8'>
                        {children}
                  </div>
            </div>
      )
}

export default RecomendedBlog