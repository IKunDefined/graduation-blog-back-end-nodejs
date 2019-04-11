const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

router.get('/list', postController.postList)
router.get('/query', postController.postQuery)
router.post('/create', postController.postCreate)
router.post('/delete', postController.postDelete)
router.post('/update', postController.postUpdate)

module.exports = router