const { createUser } = require('../service/registerService');

const register = async (req, res) => {
  const { body } = req;
  const user = await createUser(body);
  res.status(201).json(user); 
};

module.exports = { register };