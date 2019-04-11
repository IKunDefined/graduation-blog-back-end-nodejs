const Activity = require('../../models/Activity')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '查询成功'
  }
  Activity.findOne({
    _id: req.query.id
  }).then(activity => {
    if (activity) {
      responseData.activity = activity
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