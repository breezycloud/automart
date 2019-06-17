const Joi = require('joi');

module.exports = {
  validateBody: schema => (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error);
    }
    if (!req.value) { req.value = {}; }
    req.value.body = result.value;
    next();
  },
  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      token: [Joi.string(), Joi.number()],
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      address: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      isBuyer: Joi.boolean().required(),
      isSeller: Joi.boolean().required(),
    }),
  },
};
