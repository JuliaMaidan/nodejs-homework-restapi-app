const contacts = require("../models/contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  res.status(200).json(result);
};

module.exports = updateContact;
