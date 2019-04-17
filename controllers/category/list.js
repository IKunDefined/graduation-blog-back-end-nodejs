const Category = require('../../models/Category')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '获取成功',
    totalCount: 100,
    pageSize: 1,
    pageNo: 1
  }
  Category.find().then(categorylist => {
    if (categorylist.length !== 0) {
      responseData.result = categorylist
      res.json(responseData)
    } else {
      responseData = {
        code: 1,
        message: '暂无数据',
        result: []
      }
      res.json(responseData)
    }
  })
}