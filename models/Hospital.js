const { Schema } = require('mongoose')

const hospitalSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    
  departmentsId: {
    type: [Schema.Types.ObjectId],
    ref: "Department",
    required: true,
  }},

  { timestamps: true }
)

module.exports = hospitalSchema
