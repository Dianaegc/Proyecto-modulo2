const express           = require("express")
const router            = express.Router()

const authController    = require("./../controllers/authController")

router.get("/login", authController.loginUser)
router.get("/signup", authController.signUpUser)
module.exports = router