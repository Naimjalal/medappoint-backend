const mongoose = require('mongoose')
const userSchema = require('./User')
const hospitalSchema = require('./Hospital')
const appointmentSchema = require('./Appointment')
const donationSchema = require('./Donation')

const User = mongoose.model('User', userSchema)
const Hospital = mongoose.model('Hospital', hospitalSchema)
const Appointment = mongoose.model('Appointment', appointmentSchema)
const Donation =mongoose.model("Donation", donationSchema)

module.exports = { User, Hospital, Appointment, Donation}
