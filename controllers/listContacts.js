// const contacts = require("../models/contacts");

// const listContacts = async (req, res) => {
//   const result = await contacts.listContacts();
//   res.json(result);
// };

// module.exports = listContacts;

const { Contact } = require("../models/contacts");

const listContacts = async (req, res) => {
  const result = await Contact.find({});
  res.json(result);
};

module.exports = listContacts;
