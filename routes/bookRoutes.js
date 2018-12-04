const express = require('express')
const router = express.Router()
const booksController = require('../controllers/booksController')


router.get('/', booksController.getAll)
router.post('/', booksController.newBook)
router.delete('/:id', booksController.deleteBook)


module.exports = router 