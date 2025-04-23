const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
      try {
            const token = req.cookies.token
            if (!token) return res.json({ authenticated: false, msg: "Not Authenticated" })
            const user = jwt.verify(token, process.env.JWT_SECRET)
            req.user = user
            next()
      } catch (error) {
            return res.status(401).json({ authenticated: false, msg: "Invalid Credentials" })
      }
}

module.exports = authMiddleware