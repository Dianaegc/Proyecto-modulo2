const express           = require("express")
const router            = express.Router()

const specialOccasionController = require("../controllers/specialOccasionController")
//crear sO
router.get('/create/:contactId',specialOccasionController.specialOccasion)
router.post("/create" ,specialOccasionController.createspecialOccasion)
//Editar sO
router.get('/edit/:specialOccasionId',specialOccasionController.editSpecialOccasion)
router.post('/edit/:specialOccasionId',specialOccasionController.editSpecialOccasionForm)
router.post('/delete/:specialOccasionId',specialOccasionController.deleteSpecialOccasion)
module.exports = router