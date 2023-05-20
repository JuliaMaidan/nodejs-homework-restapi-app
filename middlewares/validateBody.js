const { RequestError } = require("../helpers");

const validateBody = (schema, errorMessage, showFieldName = true) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let customErrorMessage = errorMessage;
      if (showFieldName) {
        const fieldName = error.details[0].path[0];
        customErrorMessage += `: ${fieldName}`;
      }
      throw RequestError(400, customErrorMessage);
    }

    next();
  };

  return func;
};

module.exports = validateBody;
