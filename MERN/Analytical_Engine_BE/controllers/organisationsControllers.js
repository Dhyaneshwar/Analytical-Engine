const Organisation = require("../models/organisations");

const getOrganisations = async (req, res, next) => {
  let organisations;
  try {
    organisations = await Organisation.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching organisations failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    organisations: organisations.map((organisation) =>
      organisation.toObject({ getters: true })
    ),
  });
};

module.exports = {
  getOrganisations,
};
