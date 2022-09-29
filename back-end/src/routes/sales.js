const express = require('express');
const {
  sale,
  getSales,
  getSaleDetails,
  getSellers,
  getSellerRequests,
  statusUpdate,
} = require('../controller/salesController');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const saleRoute = express.Router();

saleRoute.get('/details/:id', tokenMiddleware, getSaleDetails);
saleRoute.get('/sellers', tokenMiddleware, getSellers);
saleRoute.get('/sellers/requests', tokenMiddleware, getSellerRequests);
saleRoute.get('/', tokenMiddleware, getSales);
saleRoute.post('/', tokenMiddleware, sale);
saleRoute.put('/status', tokenMiddleware, statusUpdate);
module.exports = saleRoute;
