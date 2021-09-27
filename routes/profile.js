const express           = require("express")
const router            = express.Router()

const profileController = require("../controllers/profileController")

router.get('/home',profileController.home)
module.exports = router