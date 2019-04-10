const Activity = require('../../models/Activity')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '发布成功'
  }
  const { content, createAt } = req.body.activity
  let activity = new Activity({
    content,
    createAt
  })
  activity.save()
  res.json(responseData)
}