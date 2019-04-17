const express = require('express')
const router = express.Router()
const tagController = require('../controllers/tag')

router.get('/list', tagController.tagList)
router.post('/create', tagController.tagCreate)
router.post('/delete', tagController.tagDelete)

module.exports = router