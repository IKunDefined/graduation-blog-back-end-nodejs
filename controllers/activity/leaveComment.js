const Activity = require('../../models/Activity')

module.exports = (req, res) => {
  const comment = req.body.comment
  let responseData = {
    code: 0,
    message: '评论成功'
  }
  Activity.updateOne({
    _id: comment.activityId
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