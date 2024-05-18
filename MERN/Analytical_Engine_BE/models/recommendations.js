const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const recommendationSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  title: { type: String },
  asset_type: { type: String },
  asset_id: { type: Number },
  organisation_id: { type: Number },
  user_id: { type: Number },
  creator_id: { type: Number },
  system_score: { type: Number },
  user_score: { type: Number },
  created: { type: Number },
  opened: { type: Number },
  deleted: { type: Number },
  saved: { type: Number },
  clicked_out: { type: Number },
});

recommendationSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Recommendation", recommendationSchema);
