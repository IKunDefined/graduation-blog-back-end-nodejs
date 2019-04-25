const Post = require('../../models/Post')

module.exports = (req, res) => {
  const comment = req.body.comment
  let responseData = {
    code: 0,
    message: '评论成功'
  }
  Post.updateOne({
    _id: comment.postId
  }, {
    '$push': {
      comment: comment
    }
  }).then(result => {
    if (result.nModified === 1) {
      res.json(responseData)
    } else {
      responseData = {
        code: 1,
        message: '留言失败'
      }
      res.json(responseData)
    }
  })
}