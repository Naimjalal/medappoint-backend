const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const middleware = require("../middleware")
const controller = require("../controllers/AuthController")
router.post('/register', AuthController.Register)
router.post('/login', AuthController.Login)


router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
   controller.CheckSession

)
module.exports = router