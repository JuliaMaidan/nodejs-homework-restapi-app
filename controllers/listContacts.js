const contacts = require("../../models/contacts");

const listContacts = async (req, res) => {
  const result = await contacts.getAll();
  res.json(result);
};

module.exports = listContacts;
