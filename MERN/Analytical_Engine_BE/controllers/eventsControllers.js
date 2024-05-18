const Event = require("../models/events");

const getEvents = async (req, res, next) => {
  let events;
  try {
    events = await Event.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching events failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    events: events.map((event) => event.toObject({ getters: true })),
  });
};

module.exports = {
  getEvents,
};
