const { Schema } = require('mongoose')

const donorSchema = new Schema (
  {
    
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }
)

module.exports = donorSchema