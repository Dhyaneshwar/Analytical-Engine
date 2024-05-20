const express = require("express");
const {
  getRecommendations,
  getAssetRecommendations,
} = require("../controllers/recommendationsControllers");

const router = express.Router();

router.get("/", getRecommendations);

router.get("/:asset_type/:asset_id", getAssetRecommendations);

module.exports = router;
