const express = require('express')
const wrapAsync = require('../utils/wrapAsync')
const AuthController = require('../controllers/auth')

const { validateLogin, validateRegister } = require('../middlewares/validator')

const router = express.Router()

router.post('/register', validateRegister, wrapAsync(AuthController.register))

router.post('/login', validateLogin, wrapAsync(AuthController.login))

router.get('/check-auth', AuthController.verify)

router.post('/logout', AuthController.logout)

module.exports = router