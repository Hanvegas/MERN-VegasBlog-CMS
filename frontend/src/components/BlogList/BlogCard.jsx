import React from 'react'

const BlogCard = ({ image, date, title, description, author, username }) => {
      return (
            <div className='flex flex-col'>
                  <div className='w-full h-72 '>
                        <img src={image} alt={title} className='w-full h-full object-cover rounded-xl' />
                  </div>
                  <div className='px-1'>
                        <p className='text-lg font-semibold text-black/50 mt-3 mb-3'>{date}</p>
                        <h2 className='text-2xl font-semibold mb-1'>{title}</h2>
                        <p className='text-lg font-semibold text-black/50 line-clamp-2 mb-4'>{description}</p>
                        <div className='flex items-center'>
                              <img src={author} alt={username} className='w-[50px] mr-2' />
                              <p className='text-xl font-bold'>{username}</p>
                        </div>
                  </div>
            </div>
      )
}

export default BlogCard