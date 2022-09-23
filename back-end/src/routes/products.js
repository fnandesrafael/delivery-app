const express = require('express');
const { getProdcuts } = require('../controller/productController');
/* const { authProducts } = require('../middlewares/userAuth'); */

const productRoute = express.Router();

productRoute.get('/', getProdcuts);

module.exports = productRoute;
