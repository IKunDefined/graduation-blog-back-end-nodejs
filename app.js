const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/blog/api/user', routes.userRoutes)
app.use('/blog/api/post', routes.postRoutes)
app.use('/blog/api/activity', routes.activityRoutes)
app.use('/blog/api/message', routes.messageRoutes)
app.use('/blog/api/category', routes.categoryRoutes)
app.use('/blog/api/tag', routes.tagRoutes)

mongoose.connect('mongodb://localhost:27017/graduation-blog', {
  useNewUrlParser: true
}, () => {
  console.log('database connected')
  app.listen(4000, () => {
    console.log('running in http://localhost:4000')
  })
})