import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBlog } from '../../services/blog'

const useDeleteBlog = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      const handleDelete = async () => {
            await deleteBlog(id)
            navigate('/')
      }

      return { handleDelete }
}

export default useDeleteBlog