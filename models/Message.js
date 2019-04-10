const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  content: String,
  createBy: String,
  username: String
})

module.exports = mongoose.model('Message', messageSchema)