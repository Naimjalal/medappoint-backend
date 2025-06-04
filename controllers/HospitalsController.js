const { Hospital, Doctor } = require('../models')

const getHospitals = async (req, res) => {
  const foundHospitals = await Hospital.find({}).populate('departmentsId')
  res.status(200).send(foundHospitals)
}

const getHospitalDoctors = async (req, res) => {
  const foundDoctors = await Doctor.find({
    hospitalId: req.params.hospitalId
  }).populate('departmentId')
  res
    .status(200)
    .send(
      Object.groupBy(foundDoctors, (doctors) => doctors.departmentId.depName)
    )
}

module.exports = { getHospitals, getHospitalDoctors }
