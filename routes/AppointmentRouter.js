const router = require('express').Router()
const controller = require('../controllers/AppointmentController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAppointments
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAppointment
)

router.put(
  '/:appointment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateAppointment
)

router.delete(
  '/:appointment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteAppointment
)

module.exports = router
