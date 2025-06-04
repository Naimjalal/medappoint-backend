const { Hospital, Doctor } = require('../models')

const getHospitals = async (req, res) => {
  try {
    const foundHospitals = await Hospital.find({}).populate('departmentsId')
    res.status(200).send(foundHospitals)
  } catch (error) {
    res.status(404).send('Not found')
  }
}

const getHospitalDoctors = async (req, res) => {
  try {
    const foundDoctors = await Doctor.find({
      hospitalId: req.params.hospitalId
    }).populate('departmentId')
    res
      .status(200)
      .send(
        Object.groupBy(foundDoctors, (doctors) => doctors.departmentId.depName)
      )
  } catch (error) {
    res.status(404).send('Not found')
  }
}

module.exports = { getHospitals, getHospitalDoctors }
