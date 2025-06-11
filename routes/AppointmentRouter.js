const router = require('express').Router()
const AppointmentController = require('../controllers/AppointmentController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  AppointmentController.getAppointments
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  AppointmentController.createAppointment
)

router.get(
  '/:appointmentId',
  middleware.stripToken,
  middleware.verifyToken,
  AppointmentController.getAppointment
)

router.put(
  '/:appointmentId',
  middleware.stripToken,
  middleware.verifyToken,
  AppointmentController.updateAppointment
)

router.delete(
  '/:appointmentId',
  middleware.stripToken,
  middleware.verifyToken,
  AppointmentController.deleteAppointment
)

module.exports = router
