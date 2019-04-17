const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
  content: String,
  createAt: String,
  comment: [],
  like: []
})

module.exports = mongoose.model('Activity', activitySchema)