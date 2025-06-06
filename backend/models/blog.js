const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
      title: {
            type: String,
            required: true,
      },
      description: {
            type: String,
            required: true
      },
      date: {
            type: String,
            required: true
      },
      image: {
            type: String,
            required: true
      },
      user: {
            type: Schema.Types.ObjectId,
            ref: "User"
      }
})

module.exports = mongoose.model("Blog", blogSchema)