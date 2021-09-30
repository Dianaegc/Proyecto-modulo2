// routes/post.js

const express = require("express");
const router = express.Router();
const contactController = require("./../controllers/contactController")
const routeGuards        = require("./../middlewares/route-guard")

router.get("/create",routeGuards.isLoggedIn,contactController.createContact)
router.post("/create",routeGuards.isLoggedIn,contactController.createContactForm)
router.get('/:contactId',routeGuards.isLoggedIn,contactController.editContact)
router.post('/edit/:contactId',routeGuards.isLoggedIn,contactController.editContactForm)
router.post('/delete/:contactId',routeGuards.isLoggedIn,contactController.deleteContact)
module.exports = router;
