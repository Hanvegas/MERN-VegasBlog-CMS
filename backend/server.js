const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authMiddleware = require('./middlewares/authMiddleware')

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
      origin: process.env.FRONTEND_URL,
      credentials: true
}))
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err))

app.get("/", authMiddleware, (req, res) => {
      res.send("Hello World")
})

app.use('/', require('./routes/auth'))

app.listen(process.env.PORT)