const mongoose = require("mongoose")
const userSchema = require("./User")
const hospitalSchema = require("./Hospital")
const appointmentSchema = require("./Appointment")
const donationSchema = require("./Donation")
const doctorSchema = require("./Doctor")

const User = mongoose.model("User", userSchema)
const Hospital = mongoose.model("Hospital", hospitalSchema)
const Appointment = mongoose.model("Appointment", appointmentSchema)
const Donation = mongoose.model("Donation", donationSchema)
const Doctor = mongoose.model("Doctor", doctorSchema)

module.exports = { User, Hospital, Appointment, Donation, Doctor }
