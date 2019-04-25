const User = require('../../models/User')

module.exports = (req, res) => {
  if (req.body.updateUsername) {
    const { id, username } = req.body
    let responseData = {
      code: 0,
      message: '修改成功'
    }
    User.updateOne({
      _id: id
    }, {
      username: username
    }).then(result => {
      if (result.nModified === 1) {
        res.json(responseData)
      } else {
        responseData = {
          code: 1,
          message: '修改失败'
        }
        res.json(responseData)
      }
    })
  }
  if (req.body.updatePassword) {
    const { id, password, rePassword, rePasswordConfirm } = req.body
    let responseData = {
      code: 0,
      message: '修改成功'
    }
    if (rePassword !== rePasswordConfirm) {
      responseData = {
        code: 2,
        message: '两次输入修改密码不相同'
      }
      res.json(responseData)
      return
    }
    User.updateOne({
      _id: id,
      password
    }, {
      password: rePassword
    }).then(result => {
      if (result.nModified === 1) {
        res.json(responseData)
      } else {
        responseData = {
          code: 1,
          message: '修改失败'
        }
        res.json(responseData)
      }
    })
  }
  if (req.body.updateAvatar) {
    console.log('avatar')
  }
}