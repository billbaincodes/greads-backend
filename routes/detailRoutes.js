const express = require('express')
const router = express.Router()
const detailsController = require('../controllers/detailsController')


router.get('/', detailsController.getAll)
router.get('/:id', detailsController.getBooksByAuthor)


module.exports = router