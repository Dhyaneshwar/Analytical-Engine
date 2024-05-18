const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const contentSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  content_type: { type: String, required: true },
  organisation_id: { type: Number },
  url: { type: String },
  creator_id: { type: Number },
  created: { type: Number },
  publication_date: { type: String },
});

contentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Content", contentSchema);
