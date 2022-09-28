const { createSale, readSales, readSaleDetails } = require('../service/saleService');

const sale = async (req, res) => {
  const { requests, totalPrice, customerAddress } = req.body;
  const id = await createSale(requests, totalPrice, customerAddress);
  res.status(201).json({ id });
};

const getSales = async (req, res) => {   
  const sales = await readSales(req.user);
  res.status(200).json(sales);
};

const getSaleDetails = async (req, res) => {
  const { id } = req.params;
  const detailsSales = await readSaleDetails(id);
  res.status(200).json(detailsSales);
};

module.exports = { sale, getSales, getSaleDetails };