const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
  content: String,
  createAt: String
})

module.exports = mongoose.model('Activity', activitySchema)