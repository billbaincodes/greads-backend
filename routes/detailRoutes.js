const express = require('express')
const router = express.Router()
const detailsController = require('../controllers/detailsController')


router.get('/', detailsController.getAll)
router.get('/author/:id', detailsController.getBooksByAuthor)
router.get('/book/:id', detailsController.getAuthorsOfBook)


module.exports = router