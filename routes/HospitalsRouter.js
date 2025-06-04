const router = require('express').Router()
const HospitalsController = require('../controllers/HospitalsController')

router.get('/', HospitalsController.getHospitals)

module.exports = router
