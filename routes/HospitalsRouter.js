const router = require('express').Router()
const HospitalsController = require('../controllers/HospitalsController')

router.get('/', HospitalsController.getHospitals)
router.get('/:hospitalId', HospitalsController.getHospitalDoctors)

module.exports = router
