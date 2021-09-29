// routes/post.js

const express = require("express");
const router = express.Router();
const contactController = require("./../controllers/contactController")

router.get("/create",contactController.createContact)
router.post("/create",contactController.createContactForm)
router.get('/:contactId',contactController.editContact)
router.post('/edit/:contactId',contactController.editContactForm)

module.exports = router;
