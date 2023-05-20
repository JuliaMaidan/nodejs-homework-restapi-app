const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contact");

const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validateBody(schemas.addSchema, "Missing required field", true),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  validateBody(schemas.addSchema, "Missing fields", false),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

module.exports = router;
