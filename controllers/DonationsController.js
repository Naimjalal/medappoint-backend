const { User, Hospital, Donation } = require('../models')

const getDonations = async (req, res) => {
  try {
    const foundDonations = await Donation.find({})
    res.status(200).send(foundDonations)
  } catch (error) {
    res.status(404).send(error)
  }
}

const createDonation = async (req, res) => {
  try {
    await Donation.create(req.body)
    res.status(200).send('Donation stored successfully!')
  } catch (error) {
    res.status(404).send('Error storing donation!')
  }
}

module.exports = { createDonation, getDonations }
