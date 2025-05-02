import { createContext, useEffect, useState } from "react";
import { getBlog } from "../services/blog";

export const SearchBlogContext = createContext()

export const SearchBlogProvider = ({ children }) => {
      const [blogs, setBlogs] = useState([])
      const [input, setInput] = useState('')
      const [trigger, setTrigger] = useState('')
      console.log(trigger)

      const filteredBlog = blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()))

      useEffect(() => { 
            const getBlogData = async () => {
                  const res = await getBlog()
                  setBlogs(res.data)
            }
            getBlogData()
      }, [trigger])

      return (
            <SearchBlogContext.Provider value={{ filteredBlog, setInput, setTrigger }}>
                  {children}
            </SearchBlogContext.Provider>
      )
}