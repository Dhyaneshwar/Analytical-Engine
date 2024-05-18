const express = require("express");
const { getOrganisations } = require("../controllers/organisationsControllers");

const router = express.Router();

router.get("/", getOrganisations);

module.exports = router;
