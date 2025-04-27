import useGetBlogById from '../../hooks/blog/useGetBlogById'
import Article from '../../components/Article/index'
import BlogCard from '../../components/BlogList/BlogCard'
import RecomendedBlog from '../../components/Article/RecomendedBlog'
import useGetBlog from '../../hooks/blog/useGetBlog'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
      const { id } = useParams()
      const { getDetail } = useGetBlogById()
      const { blogs } = useGetBlog()

      const images = ["../../../image/city-light.jpg", "../../image/city-light-2.jpg", '../../image/mansion.jpg']
      const imageRandom = images[Math.floor(Math.random() * images.length)]
      return (
            <div className='w-full max-w-screen-2xl mx-auto px-40 pt-20'>
                  <Article id={id} title={getDetail?.title} description={getDetail?.description} image={imageRandom} profilePic={getDetail?.user.profilePic} username={getDetail?.user.username} />
                  <RecomendedBlog>
                        {blogs.map((blog) => {
                              return (
                                    <div key={blog._id}>
                                          <BlogCard id={blog._id} image={imageRandom} date={blog.date} title={blog.title} author={blog.user.profilePic} username={blog.user.username} />
                                    </div>
                              )
                        })}
                  </RecomendedBlog>
            </div>
      )
}

export default BlogDetail