import React from 'react'
import HeroSection from '../components/HeroSection'
import BlogList from '../components/BlogList'
import useGetBlog from '../hooks/blog/useGetBlog'
import BlogCard from '../components/BlogList/BlogCard'

const Home = () => {
      const { blogs } = useGetBlog()
      return (
            <div className='w-full h-auto'>
                  <HeroSection />
                  <BlogList>
                        {blogs.map((blog) => {
                              console.log(`${import.meta.env.VITE_BASE_URL}${blog.image}`)
                              return (
                                    <div key={blog._id}>
                                          <BlogCard id={blog._id} image={`${import.meta.env.VITE_BASE_URL}${blog.image}`} date={blog.date} title={blog.title} description={blog.description} author={blog.user.profilePic} username={blog.user.username} />
                                    </div>
                              )
                        })}
                  </BlogList>
            </div>
      )
}

export default Home