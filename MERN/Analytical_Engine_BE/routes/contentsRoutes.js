const express = require("express");
const { getContents } = require("../controllers/contentsControllers");

const router = express.Router();

router.get("/", getContents);

module.exports = router;
