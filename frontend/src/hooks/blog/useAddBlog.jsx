import React, { useState } from 'react'
import { postBlog } from '../../services/blog'
import { useNavigate } from 'react-router-dom'

const useAddBlog = () => {
      const navigate = useNavigate()
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [image, setImage] = useState('')

      const handleNewBlog = async (e) => {
            e.preventDefault()
            await postBlog({ title, description, image })
            navigate("/")
      }

      return { title, setTitle, description, setDescription, image, setImage, handleNewBlog }
}

export default useAddBlog