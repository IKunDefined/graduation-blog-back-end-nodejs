const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)

router.get('/list', userController.userList)
router.post('/delete', userController.userDelete)

module.exports = router