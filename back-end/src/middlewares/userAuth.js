const Joi = require('joi');

const userAuth = (req, res, next) => {
  const { body } = req;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6),
  });

  const { error } = schema.validate(body);
    if (error) {
    return res.status(400).json({ message: error.message });
    } 
    next();
}; 

module.exports = { userAuth };