const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const db = require('./db')
const AuthRouter = require('./routes/AuthRouter')

const AppointmentRouter = require('./routes/AppointmentRouter')

const DonationsRouter = require('./routes/DonationsRouter')

const HospitalsRouter = require('./routes/HospitalsRouter')

const DoctorsRouter = require('./routes/DoctorsRouter')


const PORT = process.env.PORT || 3001
const app = express()
const UserRouter = require('./routes/UserRouter')
const { Hospital } = require('./models')

// Run Seeders when server starts
// require('./seeders/Seeders')

app.get('/', (req, res) => {
  res.send(' Welcome to the Medappoint API!')
})
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use('/hospitals', HospitalsRouter)
app.use('/auth', AuthRouter)
app.use('/appointments', AppointmentRouter)
app.use('/doctors', DoctorsRouter)
app.use('/donations', DonationsRouter)

app.use('/users', UserRouter)



//listen to port
app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
