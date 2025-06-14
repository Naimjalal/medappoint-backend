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
      cpr,
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
      cpr,
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
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      password,
      user.passwordDigest
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.status(200).send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res
      .status(500)
      .send({ status: 'Error', msg: 'An error has occurred logging in!' })
  }
}
const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body

    let user = await User.findById(req.params.user_id)
    let matched = await middleware.comparePassword(
      oldPassword,
      user.passwordDigest
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res
        .status(200)
        .send({ status: 'Password Updated !', user: payload })
    }
    res.status(401).send({status: "Error",
      msg: "Old Password did not match!"
    })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: "Error",
      msg: "An error has occurred updating password!"
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}

module.exports = {
  Register,
  Login,
  CheckSession,
  UpdatePassword
}
