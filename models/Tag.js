const mongoose = require('mongoose')

const tagSchema = mongoose.Schema({
  name: String,
  createAt: String
})

module.exports = mongoose.model('Tag', tagSchema)