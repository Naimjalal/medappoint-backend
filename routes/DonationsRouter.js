const router = require('express').Router()
const DonationsController = require('../controllers/DonationsController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.getDonations
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.createDonation
)

router.put(
  '/:donationId',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.updateDonation
)
module.exports = router
