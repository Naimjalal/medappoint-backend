const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cpr: { type: String, required: true,match:[/^\d{9}$/,"CPR must be exactly 9 digits"] },
    gender: { type: String, enum: ['Male', 'Female'] },
    bloodType: { type: String },
    nationality: { type: String },
    dateOfBirth: { type: String },
    phone: { type: String, required: true },
    allergies: { type: String }
  },
  { timestamps: true }
)

module.exports = userSchema
