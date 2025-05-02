import React, { useContext, useState } from 'react'
import { postBlog } from '../../services/blog'
import { useNavigate } from 'react-router-dom'
import { SearchBlogContext } from '../../context/searchBlog'

const useAddBlog = () => {
      const navigate = useNavigate()
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [image, setImage] = useState(null)
      const { setTrigger } = useContext(SearchBlogContext)

      const handleNewBlog = async (e) => {
            e.preventDefault()
            const formBlog = new FormData()
            formBlog.append("title", title)
            formBlog.append("description", description)
            formBlog.append('image', image)
            await postBlog(formBlog)
            setTrigger(Math.floor(Math.random() * 1000))
            navigate("/blog")
      }

      return { title, setTitle, description, setDescription, image, setImage, handleNewBlog }
}

export default useAddBlog