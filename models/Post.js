const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  createAt: String,
  summary: String,
  tags: [],
  category: {
    _id: String,
    name: String
  },
  comment: [],
  like: []
})

module.exports = mongoose.model('Post', postSchema)