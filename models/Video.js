const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
  title: String,
  createAt: String,
  summary: String,
  tags: [],
  cover: {
    urlSource: String
  },
  category: {
    _id: String,
    name: String
  },
  comment: [],
  like: []
})

module.exports = mongoose.model('Video', videoSchema)