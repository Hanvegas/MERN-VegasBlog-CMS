import { useEffect, useState } from "react"
import { getBlog } from "../../services/blog"

const useGetBlog = () => {
      const [blogs, setBlogs] = useState([])

      useEffect(() => {
            const getBlogData = async () => {
                  const res = await getBlog()
                  setBlogs(res.data)
            }
            getBlogData()
      }, [])

      return { blogs }
}

export default useGetBlog