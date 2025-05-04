const ExpressError = require('../utils/ExpressError')
const { blogSchema } = require("../schema/blog")

module.exports.validateBlog = (req, res, next) => {
      const { error } = blogSchema.validate(req.body)
      if (error) {
            const msg = error.details.map((el) => el.message).join(",")
            next(new ExpressError(msg, 400))
      } else {
            next()
      }
}