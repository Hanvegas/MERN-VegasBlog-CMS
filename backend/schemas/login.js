const Joi = require('joi')

module.exports.loginSchema = Joi.object({
      username: Joi.string().min(3).max(20).required(),
      password: Joi.string().min(6).required()
})