const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      gender,
      // isDonor,
      bloodType,
      nationality,
      dateOfBirth,
      phone,
      allergies
    } = req.body
    const passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).send('Email already registered')
    }
    const user = await User.create({
      username,
      email,
      passwordDigest,
      firstName,
      lastName,
      gender,
      // isDonor,
      bloodType,
      nationality,
      dateOfBirth,
      phone,
      allergies
    })
    res.status(201).send(user)
  } catch (error) {
    console.error('Registration Error:', error)
  res.status(500).send('Registration failed')
  }
}

const Login = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send('Login failed')
  }
}

module.exports = {
  Register,
  Login
}
