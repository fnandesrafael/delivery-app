const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('jwt.evaluation.key', 'utf-8');
const { throwCustomError } = require('../utils/errorHandler');

const createToken = (data) => {
  const token = jwt.sign(data, secret);
  return token;
};

const verifyToken = (token) => {
  try {
    const tokenVerify = jwt.verify(token, secret);    
    return tokenVerify;
  } catch (error) {
    throwCustomError('validationError', 'token invalid or expired');
  }
};

module.exports = { 
  createToken,
  verifyToken,
};
