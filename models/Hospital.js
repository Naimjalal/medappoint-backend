const { Schema } = require('mongoose')

const hospitalSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: [Number], required: true }
  },
  { timestamps: true }
)

module.exports = hospitalSchema
