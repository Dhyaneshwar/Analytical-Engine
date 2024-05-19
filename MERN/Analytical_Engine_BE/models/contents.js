const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentsSchema = new Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  description: { type: String },
  content_type: { type: String, required: true },
  organisation_id: { type: Number },
  url: { type: String },
  creator_id: { type: Number },
  created: { type: Number },
  publication_date: { type: String },
});

module.exports = mongoose.model("Content", contentsSchema);
