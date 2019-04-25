const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/list', userController.userList)
router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.post('/delete', userController.userDelete)
router.post('/update', userController.userUpdate)

module.exports = router