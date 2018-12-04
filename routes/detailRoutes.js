const express = require('express')
const router = express.Router()
const detailsController = require('../controllers/detailsController')


router.get('/', detailsController.getAll)


module.exports = router