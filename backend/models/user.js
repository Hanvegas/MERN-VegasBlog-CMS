const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const userSchema = new Schema({
      username: {
            type: String,
            unique: true,
            required: true
      },
      email: {
            type: String,
            unique: true,
            required: true
      },
      password: {
            type: String,
            required: true
      },
      profilePic: {
            type: String,
      }
})

userSchema.pre("save", async function(next) {
      if(!this.isModified("password")) return next()

      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
      next()
})

module.exports = mongoose.model('User', userSchema)