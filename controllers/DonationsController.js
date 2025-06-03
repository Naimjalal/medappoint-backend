const { User, Hospital, Donation } = require('../models')

const createDonation = async (req, res) => {
  try {
    await Donation.create(req.body)
    res.status(200).send('Donation stored successfully!')
  } catch (error) {
    res.status(404).send('Error storing donation!')
  }
}

module.exports = { createDonation }
