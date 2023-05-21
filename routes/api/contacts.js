const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares");
const { putValidateBody } = require("../../middlewares");

const schemas = require("../../schemas/contact");

const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:id",
  putValidateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

module.exports = router;
