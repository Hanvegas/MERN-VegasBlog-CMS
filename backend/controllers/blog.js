const Blog = require('../models/blog')
const path = require('path')
const fs = require('fs')

module.exports.index = async (req, res) => {
      const blogs = await Blog.find().populate('user')
      res.status(201).json(blogs)
}
module.exports.show = async (req, res) => {
      const { id } = req.params
      const blog = await Blog.findById(id).populate('user')
      res.status(201).json(blog)
}

module.exports.store = async (req, res) => {
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
}

module.exports.edit = async (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      // Formated Date
      const today = new Date()
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const formatted = today.toLocaleDateString('en-GB', options)
      const editedDate = `${formatted} Edited`

      let updatedData

      const image = req.file
      if (image) {
            const blog = await Blog.findById(id)

            // Delete Image Before
            const imagePath = path.join(__dirname, "../public", blog.image)
            fs.unlinkSync(imagePath)

            // Update Blog
            const imageUrl = `/images/${req.file.filename}`
            updatedData = await Blog.findByIdAndUpdate(id, { title, description, date: editedDate, image: imageUrl }, { new: true })
            await blog.save()
      } else {
            const blog = await Blog.findById(id)

            updatedData = await Blog.findByIdAndUpdate(id, { title, description, date: editedDate }, { new: true })
            await blog.save()
      }

      res.status(201).json({ msg: "Data Updated", updatedData })
}

module.exports.destroy = async (req, res) => {
      const { id } = req.params
      const blog = await Blog.findById(id)
      const imagePath = path.join(__dirname, "../public", blog.image)
      fs.unlinkSync(imagePath)
      await Blog.findByIdAndDelete(blog._id)
      res.status(201).json({ msg: "Deleted data Successfully" })
}