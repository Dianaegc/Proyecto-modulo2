// routes/post.js

const express = require("express");
const router = express.Router();
const contactController = require("./../controllers/contactController")

router.get("/create",contactController.createContact)
router.post("/create",contactController.createContactForm)

module.exports = router;
