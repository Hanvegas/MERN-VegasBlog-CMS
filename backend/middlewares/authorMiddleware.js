const Blog = require('../models/blog')

const authorMiddleware = async (req, res, next) => {
      const blog = await Blog.findById(req.params.id).populate("user")
      if (!blog) return res.status(404).json({ msg: "Blog not Found" })
      if (blog.user.username !== req.user.username) return res.status(403).json({ msg: "Not Authorized" })
      next()
} 

module.exports = authorMiddleware