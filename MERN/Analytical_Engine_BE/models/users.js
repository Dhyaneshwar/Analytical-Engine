const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  _id: { type: Number },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  role_id: { type: Number, required: true },
  position: { type: String },
  gender: { type: String, required: true },
  created: { type: Number },
  organisation_id: { type: Number },
  picture_name: { type: String },
  city: { type: String },
  country: { type: String },
  state: { type: String },
  phone_number: { type: Number },
  linkedin_url: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("User", usersSchema);
