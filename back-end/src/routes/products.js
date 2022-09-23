const express = require('express');
const { product } = require('../controller/productController');
/* const { authProducts } = require('../middlewares/userAuth'); */

const productRouts = express.Router();

productRouts.post('/', product);

module.exports = productRouts;
