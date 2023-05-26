const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  putValidateBody,
  authenticate,
} = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const { ctrlWrapper } = require("../../helpers");

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  putValidateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateStatusContact),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContact));

module.exports = router;
