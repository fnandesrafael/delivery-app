const { readProducts } = require('../service/productsService');

const getProducts = async (_req, res) => {
  const products = await readProducts();
  res.status(200).json(products);
};

module.exports = {
  getProducts,
};