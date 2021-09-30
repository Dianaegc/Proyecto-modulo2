const express           = require("express")
const router            = express.Router()
const routeGuards        = require("./../middlewares/route-guard")
const specialOccasionController = require("../controllers/specialOccasionController")
//crear sO
router.get('/create/:contactId',routeGuards.isLoggedIn,specialOccasionController.specialOccasion)
router.post("/create" ,routeGuards.isLoggedIn,specialOccasionController.createspecialOccasion)
//Editar sO
router.get('/edit/:specialOccasionId',routeGuards.isLoggedIn,specialOccasionController.editSpecialOccasion)
router.post('/edit/:specialOccasionId',routeGuards.isLoggedIn,specialOccasionController.editSpecialOccasionForm)
router.post('/delete/:specialOccasionId',routeGuards.isLoggedIn,specialOccasionController.deleteSpecialOccasion)
module.exports = router