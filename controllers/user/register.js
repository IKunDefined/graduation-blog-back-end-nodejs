const User = require('../../models/User')

module.exports = (req, res) => {
  let responseData = {
    code: 0,
    message: '注册成功'
  }
  const username = req.body.username
  const password = req.body.password
  const repassword = req.body.repassword
  if (username === '' || password === '') {
    responseData = {
      code: 1,
      message: '用户名或密码不能为空'
    }
    res.json(responseData)
    return
  }
  if (password !== repassword) {
    responseData = {
      code: 2,
      message: '两次输入密码不相同'
    }
    res.json(responseData)
    return
  }
  User.findOne({
    username,
    password
  }).then(userinfo => {
    if (userinfo) {
      responseData = {
        code: 3,
        message: '已经存在该用户名'
      }
      res.json(responseData)
      return
    } else {
      let user = new User({
        username,
        password
      })
      user.save()
      res.json(responseData)
    }
  })
}