const express = require('express');
const { getProducts } = require('../controller/productController');
 const { tokenMiddleware } = require('../middlewares/tokenMiddleware'); 

const productRoute = express.Router();

productRoute.get('/', tokenMiddleware, getProducts);

module.exports = productRoute;
