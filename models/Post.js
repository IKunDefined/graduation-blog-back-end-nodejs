const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  createAt: String,
  summary: String
})

module.exports = mongoose.model('Post', postSchema)