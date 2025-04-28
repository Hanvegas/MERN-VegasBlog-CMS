import React from 'react'
import FormBlog from '../../components/FormBlog'
import useAddBlog from '../../hooks/blog/useAddBlog'

const CreateBlog = () => {
      const { setTitle, setDescription, setImage, handleNewBlog } = useAddBlog()
      return (
            <div className='flex items-center w-full h-screen'>
                  <FormBlog setTitle={setTitle} setDescription={setDescription} setImage={setImage} handleSubmit={handleNewBlog} />
            </div>
      )
}

export default CreateBlog