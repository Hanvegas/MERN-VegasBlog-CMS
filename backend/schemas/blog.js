const Joi = require('joi')

module.exports.blogSchema = Joi.object({
      title: Joi.string().min(10).max(50).required(),
      description: Joi.string().min(100).required()
})