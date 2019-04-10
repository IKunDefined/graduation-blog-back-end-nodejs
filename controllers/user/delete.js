const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '删除成功'
  }
  const _id = req.body.id
  User.deleteOne({
    _id
  }).then(result => {
    if (result.deleteCount === 1) {
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