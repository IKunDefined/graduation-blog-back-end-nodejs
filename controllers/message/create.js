const Message = require('../../models/Message')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '发布成功'
  }
  const { content, createAt, username } = req.body.message
  let message = new Message({
    content,
    createAt,
    username
  })
  message.save()
  res.json(responseData)
}