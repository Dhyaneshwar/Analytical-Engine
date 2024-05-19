const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const organisationsSchema = new Schema({
  _id: { type: Number },
  name: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  industry: { type: String },
  profile: { type: [String] },
  created: { type: Number },
  description: { type: String },
  linkedin_url: { type: String },
  phone_number: { type: Number },
  email: { type: String },
  year_founded: { type: String },
  logo_name: { type: String },
});

module.exports = mongoose.model("Organisation", organisationsSchema);
