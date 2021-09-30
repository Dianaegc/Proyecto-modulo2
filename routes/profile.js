const express           = require("express")
const router            = express.Router()
const routeGuards        = require("./../middlewares/route-guard")

const profileController = require("../controllers/profileController")

router.get('/home',routeGuards.isLoggedIn,profileController.home)
module.exports = router