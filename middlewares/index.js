const { validateBody, putValidateBody } = require("./validateBody");
const { authenticate } = require("./authenticate");
const { upload } = require("./upload");
const { resize } = require("./authenticate");

module.exports = {
  validateBody,
  putValidateBody,
  authenticate,
  upload,
  resize,
};
