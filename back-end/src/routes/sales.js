const express = require('express');
const { sale, getSales } = require('../controller/salesController');
 const { tokenMiddleware } = require('../middlewares/tokenMiddleware'); 

const saleRoute = express.Router();

saleRoute.post('/', tokenMiddleware, sale);
saleRoute.get('/', tokenMiddleware, getSales);

module.exports = saleRoute;
