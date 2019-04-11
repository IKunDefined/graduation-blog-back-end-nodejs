const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: String,
  createAt: String
})

module.exports = mongoose.model('Category', categorySchema)