const mongoose = require('mongoose')
const userSchema = require('./User')

const User = mongoose.model('User', userSchema)




module.export = { User }
