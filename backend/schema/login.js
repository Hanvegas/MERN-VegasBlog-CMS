const Joi = require('joi')

module.exports.loginSchema = Joi.object({
      username: Joi.string().min(3).alphanum().required(),
      password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})