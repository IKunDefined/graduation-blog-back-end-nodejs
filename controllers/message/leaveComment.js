const Message = require('../../models/Message')

module.exports = (req, res) => {
  const comment = req.body.comment
  let responseData = {
    code: 0,
    message: '评论成功'
  }
  Message.updateOne({
    _id: comment.messageId
  }, {
    '$push': {
      comment: comment
    }
  }).then(result => {
    if (result.nModified === 1) {
      res.json(responseData)
    }
  })
}