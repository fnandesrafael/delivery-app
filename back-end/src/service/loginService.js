/* const jwt = require('jsonwebtoken'); */
const bcrypt = require('bcrypt');
const { throwCustomError } = require('../utils/errorHandler');
const db = require('../database/models');

const checkEmail = async (email) => {
  const data = await db.User.findOne({ where: { email }, raw: true });    
  if (!data) {
    throwCustomError('validationError', 'outro erro');
  }  
};

const checkPassword = async (user) => {
  const userDb = await db.User.findOne({ where: { email: user.email }, raw: true });
  await bcrypt.compare(user.password, userDb.password);
};

const createToken = async (user) => { 
  console.log(user);
  await checkEmail(user.email);
  await checkPassword(user);
};

module.exports = { createToken };