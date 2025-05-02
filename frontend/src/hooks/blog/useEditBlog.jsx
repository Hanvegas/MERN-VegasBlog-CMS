import React, { useContext, useEffect, useState } from 'react'
import { editBlog, getBlogById } from '../../services/blog'
import { useNavigate, useParams } from 'react-router-dom'
import { SearchBlogContext } from '../../context/searchBlog'

const useEditBlog = () => {
      const {setTrigger} = useContext(SearchBlogContext)
      const { id } = useParams()
      const navigate = useNavigate()
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [image, setImage] = useState(null)

      const handleSubmit = (e) => {
            e.preventDefault()
            const formBlog = new FormData()
            formBlog.append("title", title)
            formBlog.append("description", description)
            formBlog.append("image", image)
            editBlog(id, formBlog)
            setTrigger(Math.floor(Math.random() * 1000))
            navigate(`/blog/${id}`)
      }

      useEffect(() => {
            const getBlogId = async () => {
                  const res = await getBlogById(id)
                  setTitle(res.data.title)
                  setDescription(res.data.description)
                  setImage(res.data.image)
            }
            getBlogId()
      }, [id])

      return { title, setTitle, description, setDescription, image, setImage, handleSubmit }
}

export default useEditBlog