const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activity')

router.get('/list', activityController.activityList)
router.get('/query', activityController.activityQuery)
router.post('/create', activityController.activityCreate)
router.post('/delete', activityController.activityDelete)
router.post('/comment/leave', activityController.activityLeaveComment)

module.exports = router