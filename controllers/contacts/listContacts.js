const { Contact } = require("../../models/contacts");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "email subscription");
  res.json(result);
};

// const listContacts = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 20;
//   const options = {
//     page,
//     limit,
//     sort: { name: 1 },
//   };

//   const result = await Contact.paginate({}, options);
//   res.json(result);
// };

module.exports = listContacts;
