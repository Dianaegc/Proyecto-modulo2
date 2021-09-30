const express           = require("express")
const router            = express.Router()
const authController    = require("./../controllers/authController")
const routeGuards        = require("./../middlewares/route-guard")


//GET-MOSTRAR FORMULARIO PARA CREACION
//http://localhost:3000/auth/signup
router.get("/signup", routeGuards.isLoggedOut,authController.signUpUser)
// POST - Enviar datos del formulario al servidor
//http://localhost:3000/auth/signup
router.post("/signup",authController.createUserForm)

router.get("/login", routeGuards.isLoggedOut,authController.loginUser)
router.post("/login", authController.loginUserForm)
router.post("/logout",authController.logoutUser)


module.exports = router
