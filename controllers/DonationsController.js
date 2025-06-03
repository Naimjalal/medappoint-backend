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

const updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.donationId,
      req.body,
      {
        new: true
      }
    )
    res.status(200).send(donation)
  } catch (error) {
    throw error
  }
}

module.exports = { createDonation, getDonations, updateDonation }
