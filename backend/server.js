const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const ExpressError = require('./utils/ExpressError')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
      origin: process.env.FRONTEND_URL,
      credentials: true
}))
app.use(cookieParser())
app.use("/images", express.static('public/images'))

mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err))

app.use('/', require('./routes/auth'))

app.use('/blog', require('./routes/blogs'))

app.use((req, res, next) => {
      next(new ExpressError("Page Not Found", 404))
})

app.use((err, req, res, next) => {
      const statusCode = err.statusCode || 500
      res.status(statusCode).json({
            message: err.message || 'Oh no, something went wrong',
      })
})

app.listen(process.env.PORT)