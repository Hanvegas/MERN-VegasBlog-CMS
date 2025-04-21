import React from 'react'
import useFormInputAuth from '../../hooks/useFormInputAuth'

const FormAuth = ({ isHaveAcc }) => {
      const { setUsername, setEmail, setPassword, handleSubmitLogin, handleSubmitRegister } = useFormInputAuth()
      return (
            <div className='flex flex-col justify-between w-full h-full p-10'>
                  <div className='text-2xl font-bold'>
                        <span className='text-red-600'>Vegas</span>
                        <span>Blog</span>
                  </div>
                  <div className='flex flex-col items-center w-full'>
                        <h2 className='mb-5 text-4xl font-bold'>{isHaveAcc ? "Welcome Back!" : "Let's get Started!"}</h2>
                        <p className='text-xl text-gray-400 font-semibold mb-5'>{isHaveAcc ? "Hey there! Welcome back." : "Hey there! Glad you’re here."}</p>
                        <form onSubmit={isHaveAcc ? handleSubmitLogin : handleSubmitRegister} className='flex flex-col w-3/5'>
                              <label htmlFor="username" className='text-xl font-semibold mb-2'>Username</label>
                              <input type='text' name='username' id='username' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} required className='w-full mb-5 border-2 border-gray-300 px-4 py-2 text-lg' />
                              {
                                    isHaveAcc
                                          ?
                                    null
                                          :
                                    <>
                                          <label htmlFor="email" className='text-xl font-semibold mb-2'>Email</label>
                                          <input type='email' name='email' id='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required className='w-full mb-5 border-2 border-gray-300 px-4 py-2 text-lg' />
                                    </>
                              }
                              <label htmlFor="password" className='text-xl font-semibold mb-2'>Password</label>
                              <input type='password' name='password' id='password' placeholder='********' onChange={(e) => setPassword(e.target.value)} required className='w-full mb-8 border-2 border-gray-300 px-4 py-2 text-lg' />
                              {
                                    isHaveAcc
                                          ?
                                    <a href='#' className='text-end mb-5 -mt-4 font-semibold'>Forgot Password</a>
                                          :
                                    null
                              }
                              <button type='submit' className='bg-black text-white py-2 px-4 mb-5 text-lg cursor-pointer'>{isHaveAcc ? "Sign In" : "Sign Up"}</button>
                              <button className='flex  justify-center gap-3 border-2 border-gray-300 py-2 px-4 text-lg cursor-pointer'>
                                    <img src="../../../icon/2991148 1 (1).svg" alt="Google"  />
                                    Sign In with Google</button>
                        </form>
                  </div>
                  <div className='flex justify-center'>
                        <p className='text-gray-400'>{`${isHaveAcc ? "Don't" : "Already"} have an account? `}
                              <a href={isHaveAcc ? '/register' : '/login'} className='font-bold text-black'>{isHaveAcc ? "Sign Up" : "Sign In"}</a>
                        </p>
                  </div>
            </div>
      )
}

export default FormAuth