const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err))

app.get("/", (req, res) => {
      res.send("Hello World")
})

app.listen(process.env.PORT)