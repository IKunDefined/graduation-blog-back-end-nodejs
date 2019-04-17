const express = require('express')
const router = express.Router()
const messageController = require('../controllers/message')

router.get('/list', messageController.messageList)
router.get('/query', messageController.messageQuery)
router.post('/create', messageController.messageCreate)
router.post('/delete', messageController.messageDelete)
router.post('/comment/leave', messageController.messageLeaveComment)

module.exports = router