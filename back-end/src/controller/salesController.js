const { createSale, readSales } = require('../service/saleService');

const sale = async (req, res) => {
  const { requests, totalPrice, customerAddress } = req.body;
  const id = await createSale(requests, totalPrice, customerAddress);
  res.status(201).json({ id });
};

const getSales = async (req, res) => {
  try { 
  console.log(req.user);
  const sales = await readSales(req.user);
  res.status(200).json(sales);
} catch (error) {
  console.log(error);
}
};

module.exports = { sale, getSales };