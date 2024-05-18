const Contact = require("../models/contacts");

const getContacts = async (req, res, next) => {
  let contacts;
  try {
    contacts = await Contact.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching contacts failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    contacts: contacts.map((contact) => contact.toObject({ getters: true })),
  });
};

module.exports = {
  getContacts,
};
