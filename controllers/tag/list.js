const Tag = require('../../models/Tag')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '获取成功',
    totalCount: 100,
    pageSize: 1,
    pageNo: 1
  }
  Tag.find().then(taglist => {
    if (taglist.length !== 0) {
      responseData.result = taglist
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