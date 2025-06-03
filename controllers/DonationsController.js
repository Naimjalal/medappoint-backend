const { User, Hospital, Donation } = require('../models')

const getDonations = async (req, res) => {
  const foundDonations = await Donation.find({ userId: req.user._id })
  res.send(foundDonations)
}

const storeDonation = async (req, res) => {
  try {
    await Donation.create({
      userId: req.user._id,
      hospitalId: req.body.hospitalId,
      time: `${req.body.date} ${req.body.time}`
    })
    res.send(200)
  } catch (error) {
    res.send(404)
  }
}

const cancelDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.donationId)
    res.send(200)
  } catch (error) {
    res.send(404)
  }
}

module.exports = { getDonations, storeDonation, cancelDonation }
