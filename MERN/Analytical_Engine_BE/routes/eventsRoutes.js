const express = require("express");
const { getEvents } = require("../controllers/eventsControllers");

const router = express.Router();

router.get("/", getEvents);

module.exports = router;
