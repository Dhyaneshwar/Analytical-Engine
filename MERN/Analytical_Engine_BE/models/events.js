const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  _id: { type: Number },
  title: { type: String },
  event_type: { type: String },
  description: { type: String },
  start: { type: Number },
  end: { type: Number },
  location: { type: String },
  url: { type: String },
  price: { type: String },
  organisation_id: { type: Number },
  created: { type: Number },
  last_modified: { type: Number },
  lon: { type: Number },
  lat: { type: Number },
});

module.exports = mongoose.model("Event", eventsSchema);
