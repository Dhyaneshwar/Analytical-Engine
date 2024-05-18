const Content = require("../models/contents");

const getContents = async (req, res, next) => {
  let contents;
  try {
    contents = await Content.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching contents failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    contents: contents.map((content) => content.toObject({ getters: true })),
  });
};

module.exports = {
  getContents,
};
