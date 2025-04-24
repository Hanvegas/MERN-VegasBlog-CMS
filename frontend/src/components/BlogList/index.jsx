import React from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
      return (
            <div className='w-full max-w-screen-2xl mx-auto mt-9 px-8'>
                  <h1 className='text-4xl font-semibold mb-2'>Blog</h1>
                  <p className='font-medium text-lg text-black/50 mb-8'>Here, we share travel tips, destination guides, and stories that inpsire your next adventure</p>
                  <div className='grid grid-cols-3 gap-8'>
                        <BlogCard image={"../../../public/image/city-light.jpg"} date={"20 jan 2019"} title={"Unveiling the secret beyond the tourist trails"} description={"dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull"} author={"https://api.dicebear.com/9.x/adventurer/svg?seed=Liam"} username={"Liam Underware"} />
                        <BlogCard image={"../../../public/image/city-light.jpg"} date={"20 jan 2019"} title={"Unveiling the secret beyond the tourist trails"} description={"dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull"} author={"https://api.dicebear.com/9.x/adventurer/svg?seed=Liam"} username={"Liam Underware"} />
                        <BlogCard image={"../../../public/image/city-light.jpg"} date={"20 jan 2019"} title={"Unveiling the secret beyond the tourist trails"} description={"dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull"} author={"https://api.dicebear.com/9.x/adventurer/svg?seed=Liam"} username={"Liam Underware"} />
                        <BlogCard image={"../../../public/image/city-light.jpg"} date={"20 jan 2019"} title={"Unveiling the secret beyond the tourist trails"} description={"dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull"} author={"https://api.dicebear.com/9.x/adventurer/svg?seed=Liam"} username={"Liam Underware"} />
                  </div>
            </div>
      )
}

export default BlogList