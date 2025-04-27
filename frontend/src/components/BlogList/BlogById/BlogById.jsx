import React from 'react'

const BlogById = ({ title, description, image, profilePic, username }) => {
      return (
            <div className='w-full'>
                  <h1 className='w-full text-6xl font-semibold leading-20 mb-14'>{title}</h1>
                  <div className='flex items-center mb-10'>
                        <img src={profilePic} alt="Profile Picture" className='w-[85px] mr-1' />
                        <p className='text-2xl font-semibold'>{username}</p>
                  </div>
                  <div className='w-full h-[500px] mb-20 shadow-2xl'>
                        <img src={image} alt={title} className=' w-full h-full rounded-xl object-cover' />
                  </div>
                  <div className='px-12 mb-20 text-xl font-medium leading-12 text-justify'>
                        <p>{description}</p>
                  </div>
                  <div className='border-b-2 mb-16'></div>
            </div>
      )
}

export default BlogById