const Category = require('../../models/Category')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '删除成功'
  }
  const _id = req.body.id
  Category.deleteOne({
    _id
  }).then(result => {
    if (result.deletedCount === 1) {
      res.json(responseData)
    } else {
      responseData = {
        code: 1,
        message: '删除失败'
      }
      res.json(responseData)
    }
  })
}