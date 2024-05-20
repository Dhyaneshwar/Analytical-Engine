const HttpError = require("../models/http-errors");
const Recommendation = require("../models/recommendations");
const qs = require("qs");

const getRecommendations = async (req, res, next) => {
  let recommendations;
  try {
    recommendations = await Recommendation.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching recommendations failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    recommendations: recommendations.map((recommendation) =>
      recommendation.toObject({ getters: true })
    ),
  });
};

const getAssetRecommendations = async (req, res, next) => {
  const { asset_type, asset_id } = req.params;
  const { asset_id: assetIds } = qs.parse(asset_id);

  try {
    const recommendations = await Recommendation.find(
      {
        asset_type,
        asset_id: { $in: assetIds },
      },
      {
        title: 1,
        asset_id: 1,
        organisation_id: 1,
        user_id: 1,
        creator_id: 1,
        system_score: 1,
      }
    );
    res.json({
      recommendations: recommendations.map((recommendation) =>
        recommendation.toObject({ getters: true })
      ),
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching recommendations failed, please try again later.",
      500
    );
    return next(error);
  }
};

module.exports = {
  getRecommendations,
  getAssetRecommendations,
};
