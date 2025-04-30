import React from 'react'
import { Link } from "react-router-dom"
import useDeleteBlog from '../../hooks/blog/useDeleteBlog'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

const Article = ({ id, title, description, image, profilePic, username }) => {
      const { user } = useContext(AuthContext)
      const { handleDelete } = useDeleteBlog()
      return (
            <div className='w-full'>
                  <h1 className='w-full text-6xl font-semibold leading-20 mb-14'>{title}</h1>
                  <div className='flex items-center mb-10'>
                        <img src={profilePic} alt="Profile Picture" className='w-[85px] mr-1' />
                        <p className='text-2xl font-semibold'>{username}</p>
                  </div>
                  <div className='w-full h-[500px] mb-22 shadow-2xl'>
                        <img src={image} alt={title} className=' w-full h-full rounded-xl object-cover' />
                  </div>
                  <div className='px-12 mb-20 text-xl font-medium leading-12 text-justify'>
                        <p>{description}</p>
                  </div>
                  {
                        user.username === username
                              ?
                        <div className='flex w-full justify-around text-3xl mb-14'>
                              <Link to={`/edit/${id}`} className='py-3 px-6 text-white bg-green-600 rounded-md'>Edit</Link>
                              <button onClick={handleDelete} className='py-3 px-6 text-white bg-red-600 rounded-md cursor-pointer'>Delete</button>
                        </div>
                              :
                        null
                  }
                  <div className='border-b-2 mb-16'></div>
            </div>
      )
}

export default Article