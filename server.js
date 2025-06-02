const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const db = require('./db')
const AuthRouter = require("./routes/AuthRouter")
const PORT = process.env.PORT || 3001
const app = express()
app.get('/', (req, res) => {
  res.send(' Welcome to the Medappoint API!')
})
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use('/auth', AuthRouter)



//listen to port
app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
