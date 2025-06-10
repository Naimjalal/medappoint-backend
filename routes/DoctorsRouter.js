const router = require('express').Router()
const DoctorsController = require('../controllers/DoctorsController')
const middleware = require('../middleware')

// Public routes (no auth required)
router.get('/:doctorId', DoctorsController.getDoctorById) // GET /doctors/:doctorId


module.exports = router