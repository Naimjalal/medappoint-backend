const { Schema } = require("mongoose")

const departmentSchema = new Schema (
  {
  depName: { type: String, required: true
}
  }
) 

module.exports = departmentSchema
