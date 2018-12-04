const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')


router.get('/', booksController.getAll)


module.exports = router