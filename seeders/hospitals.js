const mongoose = require('mongoose')
const { Hospital } = require('../models')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createHospitals = async () => {
  let hospitals = [
    {
      name: 'Salmaniya',
      location: 'https://maps.app.goo.gl/Gqbx4y8UF8Mutxhg9'
    },
    {
      name: 'Noor Specialist Hospital',
      location: 'https://maps.app.goo.gl/6F61f5241K8f7zg68'
    },
    {
      name: 'Royal Bahrain Hospital',
      location: 'https://maps.app.goo.gl/payhBYAtbWeyziaV6'
    }
  ]

  await Hospital.deleteMany({})
  console.log('Creating hospitals . . .')
  await Hospital.insertMany(hospitals)
  console.log('Hospitals created!')

  mongoose.connection.close()
}

createHospitals()
