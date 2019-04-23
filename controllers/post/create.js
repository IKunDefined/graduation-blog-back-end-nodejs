const Post = require('../../models/Post')
const markdown = require('markdown').markdown

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '发布成功'
  }
  let { title, summary, content, createAt, tags, category } = req.body.post
  content = markdown.toHTML(content)
  let post = new Post({
    title,
    summary,
    content,
    createAt,
    tags,
    category
  })
  post.save()
  res.json(responseData)
}