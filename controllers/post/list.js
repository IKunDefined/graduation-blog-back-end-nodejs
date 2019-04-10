const Post = require('../../models/Post')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '获取成功',
    totalCount: 100,
    pageSize: 1,
    pageNo: 1
  }
  Post.find().then(postlist => {
    if (postlist) {
      responseData.result = postlist
      res.json(responseData)
    } else {
      responseData = {
        code: 1,
        message: '获取失败'
      }
      res.json(responseData)
    }
  })
}