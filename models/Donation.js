const { Schema } = require('mongoose')

const donationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  hospitalId: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
  time: { type: String, required: true },
  isDonated: { type: Boolean, required: true }
})

module.exports = donationSchema
