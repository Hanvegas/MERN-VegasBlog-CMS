import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBlog } from '../../services/blog'
import { SearchBlogContext } from '../../context/searchBlog'

const useDeleteBlog = () => {
      const { setTrigger } = useContext(SearchBlogContext)
      const navigate = useNavigate()
      const { id } = useParams()

      const handleDelete = async () => {
            await deleteBlog(id)
            setTrigger(Math.floor(Math.random() * 1000))
            navigate('/')
      }

      return { handleDelete }
}

export default useDeleteBlog