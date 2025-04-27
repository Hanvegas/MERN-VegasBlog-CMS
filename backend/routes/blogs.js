const express = require('express')
const Blog = require('../models/blog')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.get("/", authMiddleware, async (req, res) => {
      const blogs = await Blog.find().populate('user')
      res.status(201).json(blogs)
})

router.get('/:id', authMiddleware, async (req, res) => {
      const { id } = req.params
      const blog = await Blog.findById(id).populate('user')
      res.status(201).json(blog)
})

router.post("/", authMiddleware, async (req, res) => {
      try {
            const { title, description } = req.body
            const today = new Date()
            const options = { day: '2-digit', month: 'short', year: 'numeric' }
            const formatted = today.toLocaleDateString('en-GB', options)
            const blog = new Blog({ title, description, date: formatted })
            blog.user = req.user.id
            await blog.save()
            res.status(201).json({ msg: "Data Posted", blog })
      } catch (error) {
            res.status(401).json({ msg: "Post Failed" })
      }
})

router.put('/:id', authMiddleware, async (req, res) => {
      try {
            const { id } = req.params
            const { title, description } = req.body
            const today = new Date()
            const options = { day: '2-digit', month: 'short', year: 'numeric' }
            const formatted = today.toLocaleDateString('en-GB', options)
            const blog = await Blog.findByIdAndUpdate(id, { title, description, date: formatted }, { new: true })
            await blog.save()
            res.status(201).json({ msg: "Data Updated", blog })
      } catch (error) {
            res.status(400).json({ msg: "Updated Failed" })
      }
})

router.delete('/:id', authMiddleware, async (req, res) => {
      try {
            const { id } = req.params
            await Blog.findByIdAndDelete(id)
            res.status(201).json({ msg: "Deleted data Successfully" })
      } catch (error) {
            res.status(401).json({ msg: "Deleted Data Failed" })
      }
})


module.exports = router