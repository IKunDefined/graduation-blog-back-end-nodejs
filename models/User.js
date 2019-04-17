const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  createAt: String,
  avatar: {
    urlSource: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('User', userSchema)