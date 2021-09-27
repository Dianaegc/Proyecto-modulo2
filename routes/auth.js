const express           = require("express")
const router            = express.Router()

const authController    = require("./../controllers/authController")

router.post("/login", authController.loginUser)
router.get("/signup", authController.signUpUser)
router.post("/signup",authController.createUserForm)
module.exports = router