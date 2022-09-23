const { readProducts } = require('../service/productsService');

const getProdcuts = async (_req, res) => {
try {
    const products = await readProducts();
  res.status(200).json(products);
} catch (error) {
  console.log(error);
}
};

module.exports = {
  getProdcuts,
};