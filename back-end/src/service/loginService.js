const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('jwt.evaluation.key', 'utf-8');
const md5 = require('md5');
const { throwCustomError } = require('../utils/errorHandler');
const db = require('../database/models');

const checkEmail = async (email) => {
  const data = await db.User.findOne({ where: { email }, raw: true });    
  if (!data) {
    throwCustomError('notFoundError', 'user or password incorrect');
  }  
};

const createToken = (user) => {
  const token = jwt.sign(user, secret);
  return token;
};

const checkPassword = async (user) => {
  const userDb = await db.User.findOne({ where: { email: user.email }, raw: true }); 
  const isValidPassword = (md5(user.password) === userDb.password);  
  if (!isValidPassword) throwCustomError('notFoundError', 'user or password incorrect');
};

const authenticateUser = async (user) => {
  console.log(user);
  await checkEmail(user.email);
  await checkPassword(user);
  return createToken(user);
};

module.exports = { authenticateUser };