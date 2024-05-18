const User = require("../models/users");

const getUsers = async (req, res, next) => {
  res.status(200).send("Request was successful");
};

module.exports = {
  getUsers,
};
