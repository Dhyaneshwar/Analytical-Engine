const Recommendation = require("../models/recommendations");

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

module.exports = {
  getRecommendations,
};
