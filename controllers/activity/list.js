const Activity = require('../../models/Activity')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '获取成功',
    totalCount: 100,
    pageSize: 1,
    pageNo: 1
  }
  Activity.find().then(activitylist => {
    if (activitylist) {
      activitylist.reverse()
      responseData.result = activitylist
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