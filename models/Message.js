const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: String,
  createAt: String,
  username: String,
  comment: [],
  like: []
})

module.exports = mongoose.model('Message', messageSchema)