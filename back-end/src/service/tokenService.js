const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('jwt.evaluation.key', 'utf-8');

const createToken = (user) => {
  const token = jwt.sign(user, secret);
  return token;
  };

module.exports = { 
  createToken,
};
