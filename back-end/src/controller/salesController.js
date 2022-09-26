const { createSale } = require('../service/saleService');

const sale = async (req, res) => {
  const { requests, totalPrice, customerAddress } = req.body;
  const id = await createSale(requests, totalPrice, customerAddress);
  res.status(201).json({ id });
};

module.exports = { sale };