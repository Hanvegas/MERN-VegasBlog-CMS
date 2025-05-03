const express = require('express')
const Blog = require('../models/blog')
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require('../config/multer')
const fs = require('fs')
const path = require('path')
const authorMiddleware = require('../middlewares/authorMiddleware')
const wrapAsync = require('../utils/wrapAsync')
const { validateBlog } = require('../middlewares/validators')

const router = express.Router()

router.get("/", wrapAsync(async(req, res) => {
      const blogs = await Blog.find().populate('user')
      res.status(201).json(blogs)
}))

router.get('/:id', authMiddleware, wrapAsync(async (req, res) => {
      const { id } = req.params
      const blog = await Blog.findById(id).populate('user')
      res.status(201).json(blog)
}))

router.post("/", upload.single('image'), authMiddleware, validateBlog, wrapAsync(async (req, res) => {
      if (!req.file) return res.status(400).json({ msg: "Image Required" })
      const image = `/images/${req.file.filename}`
      const { title, description } = req.body

      // Formated Date
      const today = new Date()
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const formatted = today.toLocaleDateString('en-GB', options)

      // Add New Blog
      const blog = new Blog({ title, description, date: formatted, image: image })
      blog.user = req.user.id
      await blog.save()
      res.status(201).json({ msg: "Data Posted", blog })
}))

router.put('/:id', upload.single('image'), authMiddleware, authorMiddleware, validateBlog, wrapAsync(async (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      // Formated Date
      const today = new Date()
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const formatted = today.toLocaleDateString('en-GB', options)
      const editedDate = `${formatted} Edited`
      const blog = await Blog.findById(id)

      const image = req.file
      if (image) {

            // Delete Image Before
            const imagePath = path.join(__dirname, "../public", blog.image)
            fs.unlinkSync(imagePath)

            // Update Blog
            const imageUrl = `/images/${req.file.filename}`
            await Blog.findByIdAndUpdate(id, { title, description, date: editedDate, image: imageUrl }, { new: true })
            await blog.save()
      } else {
            await Blog.findByIdAndUpdate(id, { title, description, date: editedDate }, { new: true })
            await blog.save()
      }

      res.status(201).json({ msg: "Data Updated", blog })
}))

router.delete('/:id', authMiddleware, authorMiddleware, wrapAsync(async (req, res) => {
      const { id } = req.params
      const blog = await Blog.findById(id)
      const imagePath = path.join(__dirname, "../public", blog.image)
      fs.unlinkSync(imagePath)
      await Blog.findByIdAndDelete(blog._id)
      res.status(201).json({ msg: "Deleted data Successfully" })
}))

module.exports = router