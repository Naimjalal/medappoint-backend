const { Schema } = require('mongoose')

const departmentSchema = new Schema(
  {
    depName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = departmentSchema
