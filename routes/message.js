const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activity')

router.get('/list', activityController.activityList)
router.post('/create', activityController.activityCreate)
router.post('/delete', activityController.activityDelete)

module.exports = router