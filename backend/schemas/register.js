const Joi = require('joi')

module.exports.registerSchema = Joi.object({
      username: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
})