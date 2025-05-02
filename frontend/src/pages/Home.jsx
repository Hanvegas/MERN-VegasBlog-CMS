import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import BlogList from '../components/BlogList'
import BlogCard from '../components/BlogList/BlogCard'
import { SearchBlogContext } from '../context/searchBlog'

const Home = () => {
      const { filteredBlog } = useContext(SearchBlogContext)
      return (
            <div className='w-full h-auto'>
                  <HeroSection />
                  <BlogList>
                        {filteredBlog.map((blog) => {
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