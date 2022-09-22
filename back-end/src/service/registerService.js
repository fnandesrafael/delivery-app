const md5 = require('md5');
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
    await checkifExistEmail(user.email);
  await checkifExistName(user.name);
  await db.User.create(
    {
      email: user.email,
      password: md5(user.password),
      name: user.name,
      role: 'customer',
    },
  );
};

module.exports = { createUser };