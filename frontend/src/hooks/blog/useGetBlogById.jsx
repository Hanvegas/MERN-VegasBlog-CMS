import React, { useEffect, useState } from 'react'
import { getBlogById } from '../../services/blog'
import { useParams } from 'react-router-dom'

const useGetBlogById = () => {
      const { id } = useParams()
      const [getDetail, setGetDetail] = useState(null)

      useEffect(() => {
            const getDataById = async () => {
                  const res = await getBlogById(id)
                  setGetDetail(res.data)
            }
            getDataById()
      }, [])
      return { getDetail }
}

export default useGetBlogById