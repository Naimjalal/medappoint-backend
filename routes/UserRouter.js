const router = require("express").Router()
const controller= require("../controllers/UserController")
const middleware = require("../middleware")

router.get("/:user_id", controller.GetUserById)

router.put("/:user_id",middleware.stripToken, middleware.verifyToken, controller.UpdateUser)

module.exports= router