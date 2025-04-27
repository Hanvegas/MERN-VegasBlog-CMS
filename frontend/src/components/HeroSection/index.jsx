import React from 'react'

const HeroSection = () => {
      return (
            <div className='relative flex flex-col justify-end w-full h-[95vh]'>
                  <img src="../../../image/mansion.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent  to-black/30 rounded-lg'></div>
                  <div className='absolute inset-0 flex justify-between items-end max-w-screen-2xl mx-auto w-full px-8 py-20 text-white'>
                        <div>
                              <h2 className='mb-7 text-5xl font-semibold w-3xl'>Exploring the Wonder Landmark</h2>
                              <p className='text-xl line-clamp-2 w-2xl'>An iconic landmarks, this post unveils the secrets that make this destination a traveler's paradise.</p>
                        </div>
                        <div className='flex flex-col items-end mr-2'>
                              <div className='flex items-center'>
                                    <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian" alt="Photo Profile" className='w-[50px]' />
                                    <p className='text-xl font-semibold'>Theodore Reginald</p>
                              </div>
                              <p className='text-lg font-medium -mt-1'>24 Jan 2024</p>
                        </div>
                  </div>
            </div>
      )
}

export default HeroSection