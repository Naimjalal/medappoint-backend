const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const db = require('./db')

const PORT = process.env.PORT || 3001
const app = express()
app.get('/', (req, res) => {
  res.send(' Welcome to the Medappoint API!')
})
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))



//listen to port
app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
