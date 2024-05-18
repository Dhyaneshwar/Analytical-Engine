const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  role_id: { type: Number },
  city: { type: String },
  country: { type: String },
  state: { type: String },
  created: { type: Number },
  linkedin_url: { type: String },
  description: { type: String },
  organisation_id: { type: Number },
  position: { type: String },
  gender: { type: String },
  picture_name: { type: String },
  phone_number: { type: Number },
});

contactSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Contact", contactSchema);
