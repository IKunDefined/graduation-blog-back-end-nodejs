const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')

router.get('/list', categoryController.categoryList)
router.post('/create', categoryController.categoryCreate)
router.post('/delete', categoryController.categoryDelete)

module.exports = router