const { Appointment } = require('../models')

// GET 
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({userId:res.locals.payload.id})
      .populate('userId')
      .populate('doctorId')
      .populate('hospitalId')

    res.status(200).send(appointments)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching appointments', error })
  }
}

// GET
const getAppointment = async (req, res) => {
  try {
    const foundAppointment = await Appointment.findById(req.params.appointmentId)
      .populate('userId')
      .populate('doctorId')
      .populate('hospitalId')

    res.status(200).send(foundAppointment)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching appointment', error })
  }
}

// CREATE
const createAppointment = async (req, res) => {
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
const updateAppointment = async (req, res) => {
  try {
    const foundAppointment = await Appointment.findById(req.params.appointmentId)

    if (foundAppointment.userId.toString() === res.locals.payload.id) {
      await foundAppointment.updateOne(req.body, { new: true })
      await foundAppointment.save()
      res.status(200).send(foundAppointment)
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (error) {
    res.status(500).send({ message: 'Error updating appointment', error })
  }
}

// DELETE 
const deleteAppointment = async (req, res) => {
  try {
    const foundAppointment = await Appointment.findById(req.params.appointmentId)

    if (foundAppointment.userId.toString() === res.locals.payload.id) {
      await foundAppointment.deleteOne()
      res.status(200).send(foundAppointment)
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting appointment', error })
  }
}

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
}
