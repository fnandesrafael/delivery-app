const express = require('express');
const { sale, getSales, getSaleDetails } = require('../controller/salesController');
 const { tokenMiddleware } = require('../middlewares/tokenMiddleware'); 

const saleRoute = express.Router();

saleRoute.get('/details/:id', tokenMiddleware, getSaleDetails);
saleRoute.get('/', tokenMiddleware, getSales);
saleRoute.post('/', tokenMiddleware, sale);

module.exports = saleRoute;
