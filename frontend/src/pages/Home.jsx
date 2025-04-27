import React from 'react'
import HeroSection from '../components/HeroSection'
import BlogList from '../components/BlogList'
import useGetBlog from '../hooks/blog/useGetBlog'
import BlogCard from '../components/BlogList/BlogCard'

const Home = () => {
      const { blogs } = useGetBlog()
      const images = ["../../../image/city-light.jpg", "../../image/city-light-2.jpg", '../../image/mansion.jpg']
      const imageRandom = images[Math.floor(Math.random() * images.length)]
      return (
            <div className='w-full h-auto'>
                  <HeroSection />
                  <BlogList>
                        {blogs.map((blog) => {
                              return (
                                    <div key={blog._id}>
                                          <BlogCard id={blog._id} image={imageRandom} date={blog.date} title={blog.title} description={blog.description} author={blog.user.profilePic} username={blog.user.username} />
                                    </div>
                              )
                        })}
                  </BlogList>
            </div>
      )
}

export default Home