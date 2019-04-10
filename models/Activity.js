const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
  content: String,
  createBy: String
})

module.exports = mongoose.model('Activity', activitySchema)