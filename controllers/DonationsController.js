const { Donation } = require('../models')

const getDonations = async (req, res) => {
  try {
    const foundDonations = await Donation.find({
      userId: res.locals.payload.id
    }).populate('hospitalId')
    res.status(200).send(foundDonations)
  } catch (error) {
    res.status(404).send(error)
  }
}

const getDonation = async (req, res) => {
  try {
    const foundDonation = await Donation.findById(
      req.params.donationId
    ).populate('hospitalId')
    res.status(200).send(foundDonation)
  } catch (error) {
    res.status(404).send(error)
  }
}

const createDonation = async (req, res) => {
  try {
    await Donation.create({ userId: res.locals.payload.id, ...req.body })
    res.status(200).send('Donation stored successfully!')
  } catch (error) {
    res.status(404).send('Error storing donation!')
  }
}

const updateDonation = async (req, res) => {
  try {
    const foundDonation = await Donation.findById(req.params.donationId)
    if (foundDonation.userId.toString() === res.locals.payload.id) {
      await foundDonation.updateOne(req.body, {
        new: true
      })
      await foundDonation.save()
      res.status(200).send(foundDonation)
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (error) {
    res.status(400).send('Error')
  }
}

const deleteDonation = async (req, res) => {
  try {
    const foundDonation = await Donation.findById(req.params.donationId)
    if (foundDonation.userId.toString() === res.locals.payload.id) {
      await foundDonation.deleteOne()
      res.status(200).send(foundDonation)
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (error) {
    res.status(400).send('Error')
  }
}

module.exports = {
  createDonation,
  getDonations,
  getDonation,
  updateDonation,
  deleteDonation
}
