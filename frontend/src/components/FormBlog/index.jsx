import React from 'react'

const FormBlog = ({ title, setTitle, description, setDescription, image, setImage, handleSubmit }) => {
      return (
            <form onSubmit={handleSubmit} className='w-full max-w-screen-xl mx-auto rounded-xl shadow-xl p-10'>
                  <div className='mb-12'>
                        <label htmlFor='title' className='text-2xl font-medium'>Title</label>
                        <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full py-2 px-6 mt-2 text-lg bg-gray-100 rounded-lg shadow-sm' required />
                  </div>
                  <div className='mb-12'>
                        <label htmlFor='description' className='text-2xl font-medium'>Description</label>
                        <textarea id='description' rows={8} value={description} onChange={(e) => setDescription(e.target.value)} className='w-full py-2 px-6 mt-2 text-lg bg-gray-100 rounded-lg shadow-sm' required></textarea>
                  </div>
                  <div className='mb-12'>
                        <label htmlFor='image' className='text-2xl font-medium'>Image</label>
                        <input type='file' name='image' id='image' onChange={(e) => setImage(e.target.files[0])} className='w-full py-2 px-6 mt-2 bg-gray-100 rounded-lg shadow-sm cursor-pointer' />
                  </div>
                  <div className='w-full flex justify-end'>
                        <button className='py-3 px-6 text-lg font-semibold text-white bg-green-600 rounded-md shadow-lg cursor-pointer'>Update</button>
                  </div>
            </form>
      )
}

export default FormBlog