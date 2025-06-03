const router = require('express').Router()
const DonationsController = require('../controllers/DonationsController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.createDonation
)

module.exports = router
