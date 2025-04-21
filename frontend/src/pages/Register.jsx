import React from 'react'
import FormAuth from '../components/FormAuth'

const Register = () => {
      return (
            <div className='flex w-full h-screen'>
                  <div className='w-1/2 bg-gray-100'>
                        <FormAuth isHaveAcc={false} />
                  </div>
                  <div className='w-1/2 h-full'>
                        <img src="../../image/city-light.jpg" alt="Image" className='w-full h-full object-cover' />
                  </div>
            </div>
      )
}

export default Register