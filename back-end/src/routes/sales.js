const express = require('express');
const { sale } = require('../controller/salesController');
 const { tokenMiddleware } = require('../middlewares/tokenMiddleware'); 

const saleRoute = express.Router();

saleRoute.post('/', tokenMiddleware, sale);

module.exports = saleRoute;
