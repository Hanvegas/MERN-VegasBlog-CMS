const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
      const token = req.cookies.token
      if (!token) {
            res.redirect('/login')
            return res.status(401).json({msg: "Not Authenticated"})
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ msg: "Invalid Token" })
            next()
      })
}

module.export = authMiddleware