const { Appointment } = require('../models')

// GET 
const GetAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({})
      .populate('userId')
      .populate('doctorId')
      .populate('hospitalId')

    res.status(200).send(appointments)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching appointments', error })
  }
}

// CREATE
const CreateAppointment = async (req, res) => {
  try {
    const { doctorId, hospitalId, time } = req.body

    const appointment = await Appointment.create({
      userId: res.locals.payload.id,
      doctorId,
      hospitalId,
      time
    })

    res.status(201).send(appointment)
  } catch (error) {
    res.status(500).send({ message: 'Error creating appointment', error })
  }
}

// UPDATE 
const UpdateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.appointment_id,
      req.body,
      { new: true }
    )
    res.status(200).send(updated)
  } catch (error) {
    res.status(500).send({ message: 'Error updating appointment', error })
  }
}

// DELETE 
const DeleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.appointment_id)
    res.status(200).send({
      msg: 'Appointment deleted',
      id: req.params.appointment_id
    })
  } catch (error) {
    res.status(500).send({ message: 'Error deleting appointment', error })
  }
}

module.exports = {
  GetAppointments,
  CreateAppointment,
  UpdateAppointment,
  DeleteAppointment
}
