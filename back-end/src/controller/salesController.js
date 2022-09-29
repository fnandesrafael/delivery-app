const {
  createSale,
  readSales,
  readSaleDetails,
  readSellers,
  readSellerRequests,
  changeStatus,
  findSaleStatus,
} = require('../service/saleService');

const sale = async (req, res) => {
  const { requests, totalPrice, customerAddress } = req.body;
  const id = await createSale(requests, totalPrice, customerAddress);
  res.status(201).json({ id });
};

const getSales = async (req, res) => {
  const sales = await readSales(req.user);
  res.status(200).json(sales);
};
const getSellerRequests = async (req, res) => {
  const sales = await readSellerRequests(req.user);
  res.status(200).json(sales);
};

const getSaleDetails = async (req, res) => {
  const { id } = req.params;
  const detailsSales = await readSaleDetails(id);
  res.status(200).json(detailsSales);
};

const getSellers = async (req, res) => {
  const sellers = await readSellers();
  res.status(200).json(sellers);
};

const statusUpdate = async (req, res) => {
  const { status, id } = req.body;
  await changeStatus(status, id);
  const newStatus = await findSaleStatus(id);
  return res.status(200).json({ status: newStatus });
};

module.exports = {
  sale,
  getSales,
  getSaleDetails,
  getSellers,
  getSellerRequests,
  statusUpdate,
};
