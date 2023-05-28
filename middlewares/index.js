const { validateBody, putValidateBody } = require("./validateBody");

const { authenticate } = require("./authenticate");
const { upload } = require("./upload");

module.exports = {
  validateBody,
  putValidateBody,
  authenticate,
  upload,
};
