const { Hospital } = require('../models')
const getHospitals = async (req, res) => {
  const foundHospitals = await Hospital.find({}).populate('departmentsId')
  res.status(200).send(foundHospitals)
}
module.exports = { getHospitals }
