const express = require("express");
const { getContacts } = require("../controllers/contactsControllers");

const router = express.Router();

router.get("/", getContacts);

module.exports = router;
