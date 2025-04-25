import api from "./api"

export const getBlog = () => api.get('/blog')
export const getBlogById = (id) => api.get(`/blog/${id}`)
export const postBlog = (data) => api.post('/blog', data)
export const editBlog = (id, data) => api.put(`/blog/${id}`, data)
export const deleteBlog = (id) => api.delete(`/blog/${id}`)