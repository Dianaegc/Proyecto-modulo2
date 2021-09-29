const express           = require("express")
const router            = express.Router()
const authController    = require("./../controllers/authController")


router.get("/login",authController.loginUser)
router.post("/login", authController.loginUserForm)
router.get("/signup",authController.signUpUser)
router.post("/signup",authController.createUserForm)


module.exports = router