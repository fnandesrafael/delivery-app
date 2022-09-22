const { authenticateUser } = require('../service/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;  
  const token = await authenticateUser({ email, password });
  return res.status(200).json({ token });
}; 

module.exports = { login };