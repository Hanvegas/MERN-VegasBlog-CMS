import React from 'react'
import FormBlog from '../../components/FormBlog'
import useEditBlog from '../../hooks/blog/useEditBlog'

const EditBlog = () => {
      const { title, setTitle, description, setDescription, image, setImage, handleSubmit } = useEditBlog()

      return (
            <div className='flex items-center w-full h-screen'>
                  <FormBlog title={title} setTitle={setTitle} description={description} setDescription={setDescription} setImage={setImage} handleSubmit={handleSubmit} />
            </div>
      )
}

export default EditBlog