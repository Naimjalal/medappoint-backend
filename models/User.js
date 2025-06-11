const { Schema } = require('mongoose')

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordDigest: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
    cpr: { type: String, required: true }, 
  gender: { type: String, enum: ['Male', 'Female'] },
  // isDonor: { type: Boolean, default: false },
  bloodType: { type: String },
  nationality: { type: String },
  dateOfBirth: { type: String },
  phone: { type: String },
  allergies: { type: String }
},
{timestamps: true}
)

module.exports = userSchema

