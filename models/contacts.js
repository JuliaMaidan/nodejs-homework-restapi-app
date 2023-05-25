const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const { handleSaveErrors } = require("../helpers");

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

// contactsSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  false: Joi.boolean(),
});

const updateStatusContact = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", contactsSchema);

const schemas = { addSchema, updateStatusContact };

module.exports = { Contact, schemas };
