const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const upload = require('../config/multer')
const BlogController = require('../controllers/blog')
const authorMiddleware = require('../middlewares/authorMiddleware')
const wrapAsync = require('../utils/wrapAsync')
const { validateBlog } = require('../middlewares/validator')

const router = express.Router()

router.route('/')
      .get(wrapAsync(BlogController.index))
      .post(upload.single('image'), authMiddleware, validateBlog, wrapAsync(BlogController.store))

router.route('/:id')
      .get(authMiddleware, wrapAsync(BlogController.show))
      .put(upload.single('image'), authMiddleware, authorMiddleware, wrapAsync(BlogController.edit))
      .delete(authMiddleware, authorMiddleware, wrapAsync(BlogController.destroy))

module.exports = router