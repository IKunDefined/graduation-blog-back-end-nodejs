const Post = require('../../models/Post')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '查询成功'
  }
  Post.findOne({
    _id: req.query.id
  }).then(post => {
    if (post) {
      responseData.post = post
      res.json(responseData)
    } else {
      responseData = {
        code: 1,
        message: '查询失败'
      }
      res.json(responseData)
    }
  })
}