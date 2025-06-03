const mongoose = require('mongoose')
const userSchema = require('./User')
const hospitalSchema = require('./Hospital')

const User = mongoose.model('User', userSchema)
const Hospital = mongoose.model('Hospital', hospitalSchema)

module.exports = { User, Hospital }
