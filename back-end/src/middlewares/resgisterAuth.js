const Joi = require('joi');

const registerAuth = (req, res, next) => {
  const { body } = req;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(12).required(),
  });

  const { error } = schema.validate(body);
    if (error) {
    return res.status(400).json({ message: error.message });
    } 
    next();
}; 

module.exports = { registerAuth };