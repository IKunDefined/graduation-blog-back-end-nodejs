const Tag = require('../../models/Tag')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '添加成功'
  }
  const tagName = req.body.tag
  let tag = new Tag({
    name: tagName
  })
  tag.save()
  res.json(responseData)
}