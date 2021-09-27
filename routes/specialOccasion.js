const express           = require("express")
const router            = express.Router()

const specialOccasionController = require("../controllers/specialOccasionController")

router.get('/',specialOccasionController.specialOccasion)
router.post("/" ,specialOccasionController.createspecialOccasion)
router.get('/:specialOccasionId',specialOccasionController.editSpecialOccasion)
module.exports = router