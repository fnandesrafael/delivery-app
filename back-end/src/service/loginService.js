const md5 = require('md5');
const { createToken } = require('./tokenService');
const { throwCustomError } = require('../utils/errorHandler');
const db = require('../database/models');

const checkEmail = async (email) => {
  const data = await db.User.findOne({ where: { email }, raw: true });    
  if (!data) {
    throwCustomError('notFoundError', 'user or password incorrect');
  }  
};

const checkPassword = async (user) => {
  const userDb = await db.User.findOne({ where: { email: user.email }, raw: true }); 
  const isValidPassword = (md5(user.password) === userDb.password);  
  if (!isValidPassword) throwCustomError('notFoundError', 'user or password incorrect');
  return userDb;
};

const authenticateUser = async (user) => {
  await checkEmail(user.email);
  const userDb = await checkPassword(user);
  const token = createToken(user.email);
  return ({ token, email: userDb.email, name: userDb.name, role: userDb.role });
};

module.exports = { authenticateUser };