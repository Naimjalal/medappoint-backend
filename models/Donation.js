const { Schema } = require('mongoose')

const donationSchema = new Schema (
  {
    
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }
)

module.exports = donationSchema