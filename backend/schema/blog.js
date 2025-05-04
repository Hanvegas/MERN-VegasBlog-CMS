const Joi = require('joi')

module.exports.blogSchema = Joi.object({
      title: Joi.string().min(3).required(),
      description: Joi.string().required()
})