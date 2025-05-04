const Joi = require('joi')

module.exports.registerSchema = Joi.object({
      username: Joi.string().min(3).alphanum().required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})