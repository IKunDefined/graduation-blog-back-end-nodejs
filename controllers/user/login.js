const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '登录成功'
  }
  const username = req.body.username
  const password = req.body.password
  if (username === '' || password === '') {
    responseData = {
      code: 1,
      message: '用户名或密码不能为空'
    }
    res.json(responseData)
    return
  }
  User.findOne({
    username,
    password
  }).then(userinfo => {
    if (userinfo) {
      let {
        _id,
        isAdmin,
        username
      } = userinfo
      responseData.userinfo = {
        _id,
        isAdmin,
        username
      }
      res.json(responseData)
      return
    } else {
      responseData = {
        code: 4,
        message: '用户名或密码错误'
      }
      res.json(responseData)
      return
    }
  })
}