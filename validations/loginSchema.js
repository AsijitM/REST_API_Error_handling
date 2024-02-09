const Joi = require('joi');

const loginSchema = Joi.object({
  userId: Joi.number().required(),
});


module.exports =loginSchema