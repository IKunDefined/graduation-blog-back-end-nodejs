const Post = require('../../models/Post')

module.exports = (req, res) => {
  let responseData = {}
  const { userId, username, status } = req.body
  if (!status) {
    responseData = {
      code: 0,
      message: '点赞成功'
    }
  } else {
    responseData = {
      code: 0,
      message: '取消点赞成功'
    }
  }
  const likeInfo = {
    userId,
    username,
    likeStatus: !status
  }
  Post.updateOne({
    _id: req.body.id,
    'like.userId': userId
  }, {
    '$set': {
      like: likeInfo
    }
  }).then(result => {
    if (result.nModified === 1) {
      res.json(responseData)
    } else {
      Post.updateOne({
        _id: req.body.id
      }, {
        '$push': {
          like: likeInfo
        }
      }).then(result => {
        if (result.nModified === 1) {
          res.json(responseData)
        } else {
          responseData = {
            code: 1,
            message: '操作失败'
          }
          res.json(responseData)
        }
      })
    }
  })
}