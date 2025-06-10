const {Doctor} = require("../models") // Adjust path as needed

const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId)
      .populate("hospitalId")
      .populate("departmentId")

    if (!doctor) {
      return res.status(404).send({ error: "Doctor not found" })
    }
    res.status(200).send(doctor)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

module.exports = {
  getDoctorById,
}
