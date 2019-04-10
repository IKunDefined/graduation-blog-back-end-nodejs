const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

router.get('/list', postController.postList)
router.post('/create', postController.postCreate)
router.post('/delete', postController.postDelete)
router.post('/update', postController.postUpdate)

module.exports = router