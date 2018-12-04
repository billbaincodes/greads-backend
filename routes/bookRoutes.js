const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')


router.get('/', booksController.getAll)
router.post('/', booksController.newPost)


module.exports = router