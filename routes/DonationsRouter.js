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

router.get(
  '/:donationId',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.getDonation
)

router.put(
  '/:donationId',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.updateDonation
)

router.delete(
  '/:donationId',
  middleware.stripToken,
  middleware.verifyToken,
  DonationsController.deleteDonation
)

module.exports = router
