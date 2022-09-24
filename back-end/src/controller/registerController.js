const { createUser } = require('../service/registerService');

const register = async (req, res) => {
try {
  const { body } = req;
  const user = await createUser(body);
  res.status(201).json(user);
} catch (error) {
  console.log(error);
}
};

module.exports = { register };