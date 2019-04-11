const Message = require('../../models/Message')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '查询成功'
  }
  Message.findOne({
    _id: req.query.id
  }).then(message => {
    if (message) {
      responseData.message = message
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