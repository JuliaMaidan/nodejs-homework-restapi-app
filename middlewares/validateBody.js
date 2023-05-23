const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const fieldName = error.details[0].path[0];
      throw RequestError(400, `Missing required ${fieldName} field`);
    }
    next();
  };

  return func;
};

const putValidateBody = (schema) => {
  const func = (req, res, next) => {
    if (JSON.stringify(req.body) === "{}") {
      throw RequestError(400, "Missing Fields");
    }
    const { error } = schema.validate(req.body);
    if (error) {
      const fieldName = error.details[0].path[0];
      throw RequestError(400, `Missing required ${fieldName} field`);
    }
    next();
  };

  return func;
};

module.exports = { validateBody, putValidateBody };
