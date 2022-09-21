const { createToken } = require('../service/loginService');

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;  
  const token = await createToken({ email, password });
  return res.status(200).json({ token });
}; 

module.exports = { authenticateUser };