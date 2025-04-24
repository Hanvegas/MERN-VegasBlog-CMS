import React from 'react'
import HeroSection from '../components/HeroSection'
import BlogList from '../components/BlogList'

const Home = () => {
      return (
            <div className='w-full h-auto'>
                  <HeroSection />
                  <BlogList />
            </div>
      )
}

export default Home