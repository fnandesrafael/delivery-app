const express = require('express');
const { login } = require('../controller/loginController');
const { userAuth } = require('../middlewares/userAuth');

const loginRoute = express.Router();

loginRoute.post('/', userAuth, login);

module.exports = loginRoute;
