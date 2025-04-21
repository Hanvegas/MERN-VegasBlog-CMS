const express = require('express')
const wrapAsync = require('../utils/wrapAsync')

const User = require('../models/user')

const router = express.Router()

router.post('/register', wrapAsync(async (req, res) => {
      try {
            const { username, email, password } = req.body
            const newUser = new User({ username, email, password })
            await newUser.save()
            res.send("Registed Successfully")
      } catch (error) {
            res.send("Registed Failed")
      }
}))

module.exports = router