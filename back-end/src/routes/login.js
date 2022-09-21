const express = require('express');
const { authenticateUser } = require('../controller/loginController');
const { userAuth } = require('../middlewares/userAuth');

const loginRoute = express.Router();

loginRoute.post('/', userAuth, authenticateUser);

module.exports = loginRoute;
