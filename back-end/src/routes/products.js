const express = require('express');
const { getProducts } = require('../controller/productController');
/* const { authProducts } = require('../middlewares/userAuth'); */

const productRoute = express.Router();

productRoute.get('/', getProducts);

module.exports = productRoute;
