import React from 'react'

const Footer = () => {
      return (
            <div className='flex justify-center items-center w-full h-24 bg-black'>
                  <div className='flex items-end'>
                        <h3 className='text-3xl font-semibold mr-2'>
                              <span className='text-red-500'>Vegas</span>
                              <span className='text-white'>Blog</span>
                        </h3>
                        <p className='font-medium text-white'>&copy;{new Date().getFullYear()} All Rights Reserved</p>
                  </div>
            </div>
      )
}

export default Footer