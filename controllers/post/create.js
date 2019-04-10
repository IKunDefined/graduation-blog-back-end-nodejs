const Post = require('../../models/Post')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '发布成功'
  }
  const { title, summary, content, createAt } = req.body.post
  let post = new Post({
    title,
    summary,
    content,
    createAt
  })
  post.save()
  res.json(responseData)
}