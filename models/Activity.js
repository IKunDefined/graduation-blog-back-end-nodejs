const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
  content: String,
  createAt: String,
  comment: {
    _id: String,
    content: String,
    username: String
  }
})

module.exports = mongoose.model('Activity', activitySchema)