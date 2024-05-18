const express = require("express");
const {
  getRecommendations,
} = require("../controllers/recommendationsControllers");

const router = express.Router();

router.get("/", getRecommendations);

module.exports = router;
