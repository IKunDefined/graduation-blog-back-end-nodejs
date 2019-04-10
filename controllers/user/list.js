const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '获取成功',
    totalCount: 100,
    pageSize: 1,
    pageNo: 1
  }
  User.find().then(userlist => {
    if (userlist) {
      responseData.result = userlist
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