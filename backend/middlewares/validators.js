const { blogSchema } = require("../schemas/blog")
const { loginSchema } = require("../schemas/login")
const { registerSchema } = require("../schemas/register")
const ExpressError = require('../utils/ExpressError')

module.exports.validateBlog = (req, res, next) => {
      const { error } = blogSchema.validate(req.body)
      if (error) {
            const msg = error.details.map((el) => el.message).join(",")
            next(new ExpressError(msg, 400))
      } else {
            next()
      }
}

module.exports.validateRegister = (req, res, next) => {
      const { error } = registerSchema.validate(req.body)
      if (error) {
            const msg = error.details.map((el) => el.message).join(",")
            next(new ExpressError(msg, 400))
      } else {
            next()
      }
}

module.exports.validateLogin = (req, res, next) => {
      const { error } = loginSchema.validate(req.body)
      if (error) {
            const msg = error.details.map((el) => el.message).join(",")
            next(new ExpressError(msg, 400))
      } else {
            next()
      }
}