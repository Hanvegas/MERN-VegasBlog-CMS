const express = require('express')
const wrapAsync = require('../utils/wrapAsync')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const { validateLogin, validateRegister } = require('../middlewares/validator')

const router = express.Router()

router.post('/register', validateRegister, wrapAsync(async (req, res) => {
      const { username, email, password } = req.body

      const characterName = ["KingSton", "Avery", "Destiny", "Eliza", "Andrea", "Jude", "Liam", "Mason", "Sophia"]
      const randomCharacter = characterName[Math.floor(Math.random() * characterName.length)]
      const profilePic = `https://api.dicebear.com/9.x/adventurer/svg?seed=${randomCharacter}`
      const newUser = new User({ username, email, password, profilePic })
      await newUser.save()
      res.status(201).json({ msg: "Registed Successfully" })
}))

router.post('/login', validateLogin, wrapAsync(async (req, res) => {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if(!user) return res.status(404).json({ msg: "Invalid Credentials" })
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(401).json({ msg: "Username or Password Wrong" })
            const token = jwt.sign({ id: user.id, username: user.username, profilePic: user.profilePic }, process.env.JWT_SECRET, { expiresIn: "1d" })
            res.cookie("token", token, {
                  httpOnly: true,
                  secure: false,
                  sameSite: "strict",
                  maxAge: 1000 * 60 * 60 * 24
            })
            res.status(201).json({ msg: "Login Successfully" })
}))

router.get('/check-auth', (req, res) => {
      try {
            const token = req.cookies.token
            if (!token) return res.json({ authenticated: false })
            const user = jwt.verify(token, process.env.JWT_SECRET)
            res.json({ authenticated: true, user })
      } catch {
            res.status(401).json({ authenticated: false })
      }
})

router.post('/logout', (req, res) => {
      try {
            res.clearCookie('token', { httpOnly: true, secure: false, sameSite: "strict" })
            res.status(201).json({ msg: "Logout Successfully" })
      } catch (error) {
            res.status(401).json({ msg: "Logout Failed" })
      }
})

module.exports = router