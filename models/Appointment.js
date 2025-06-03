const { Schema } = require('mongoose')

const appointmentSchema = new Schema(
  {
    hospitalId: {
      type: Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
    time: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = appointmentSchema
