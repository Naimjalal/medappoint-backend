const { Schema } = require('mongoose')

const doctorSchema = new Schema({
  drName: { type: String, required: true },

  departmentId: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },

  hospitalId: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  }
})

module.exports = doctorSchema
