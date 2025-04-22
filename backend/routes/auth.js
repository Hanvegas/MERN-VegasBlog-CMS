const express = require('express')
const wrapAsync = require('../utils/wrapAsync')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const router = express.Router()

router.post('/register', wrapAsync(async (req, res) => {
      try {
            const { username, email, password } = req.body
            if (!username || !email || !password) return res.status(400).json({ mgs: "Please input field" })
            const newUser = new User({ username, email, password })
            await newUser.save()
            res.status(201).json({ msg: "Registed Successfully" })
      } catch (error) {
            res.status(500).json({ msg: error })
      }
}))

router.post('/login', wrapAsync(async (req, res) => {
      try {
            const { username, password } = req.body
            if (!username || !password) return res.status(400).json({ msg: "Please input field" })
            const user = await User.findOne({ username })
            if (!user) return res.status(404).json({ msg: "User not found" })
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" })
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
            res.cookie("token", token, {
                  httpOnly: true,
                  secure: false,
                  sameSite: "strict",
                  maxAge: 1000 * 60 * 60 * 24
            })
            res.status(201).json({ msg: "Login Successfully" })
      } catch (error) {
            res.send(error)
      }
}))

module.exports = router