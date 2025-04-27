import React, { useEffect, useState } from 'react'
import { editBlog, getBlogById } from '../../services/blog'
import { useNavigate, useParams } from 'react-router-dom'

const useEditBlog = () => {
      const { id } = useParams()
      const navigate = useNavigate()
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [image, setImage] = useState('')

      const handleSubmit = (e) => {
            e.preventDefault()
            editBlog(id, { title, description, image })
            navigate(`/${id}`)
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