const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
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

eventSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Event", eventSchema);
