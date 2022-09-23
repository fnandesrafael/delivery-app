const { authenticateUser } = require('../service/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;  
  const user = await authenticateUser({ email, password });
  return res.status(200).json(user);
}; 

module.exports = { login };