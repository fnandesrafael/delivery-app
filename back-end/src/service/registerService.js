const md5 = require('md5');
const { createToken } = require('./tokenService');
const db = require('../database/models');
const { throwCustomError } = require('../utils/errorHandler');

const checkifExistEmail = async (email) => {  
  const user = await db.User.findOne({ where: { email }, raw: true });  
  if (user) throwCustomError('sequelizeUniqueConstraintError', 'email already exists');
};

const checkifExistName = async (name) => {
  const user = await db.User.findOne({ where: { name }, raw: true });
  if (user) throwCustomError('sequelizeUniqueConstraintError', 'name already exists');
};

const createUser = async (user) => {
  const { name, email } = user;
  await checkifExistEmail(user.email);
  await checkifExistName(user.name);  
  const token = createToken({ email, name });
  const userDb = await db.User.create(
    {
      email: user.email,
      password: md5(user.password),
      name: user.name,
      role: 'customer',
    },
  );
  return { token, name: userDb.name, email: userDb.email, role: userDb.role };
};

module.exports = { createUser };