const Category = require('../../models/Category')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '添加成功'
  }
  const categoryName = req.body.category
  let category = new Category({
    name: categoryName
  })
  category.save()
  res.json(responseData)
}