const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: String,
  createAt: String,
  username: String,
  comment: {
    _id: String,
    content: String,
    username: String
  }
})

module.exports = mongoose.model('Message', messageSchema)