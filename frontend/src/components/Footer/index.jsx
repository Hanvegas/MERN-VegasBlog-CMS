import React from 'react'

const Footer = () => {
      return (
            <div className='flex flex-col justify-center w-full h-[200px] px-18 bg-black rounded-lg'>
                  <h1 className='text-4xl font-semibold text-white mb-9'>
                        VegasBlog
                  </h1>
                  <p className='font-medium text-white'>&copy;{new Date().getFullYear()} VegasBlog All Rights Reserved</p>
            </div>
      )
}

export default Footer