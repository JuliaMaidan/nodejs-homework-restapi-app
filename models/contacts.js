const { Schema, model } = require("mongoose");
const Joi = require("joi");

const mongoosePaginate = require("mongoose-paginate-v2");

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
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

contactsSchema.plugin(mongoosePaginate);

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
