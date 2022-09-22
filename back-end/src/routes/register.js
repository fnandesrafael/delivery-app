const express = require('express');
const { register } = require('../controller/registerController');
const { registerAuth } = require('../middlewares/resgisterAuth');

const registerRoute = express.Router();

registerRoute.post('/', registerAuth, register);

module.exports = registerRoute;
