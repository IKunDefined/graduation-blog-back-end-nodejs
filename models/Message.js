const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: String,
  createAt: String,
  username: String
})

module.exports = mongoose.model('Message', messageSchema)