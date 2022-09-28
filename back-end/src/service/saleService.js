const db = require('../database/models');

const fillSalesProducts = async (productId, saleId, quantity) =>
  db.SalesProducts.create({ productId, saleId, quantity }, { raw: true });

const createSale = async (requests, totalPrice, customerAdress) => {  
  const { userId, sellerId } = requests[0];
  const { address, number } = customerAdress;  
  const sale = await db.Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress: address,
    deliveryNumber: number,
  }, { raw: true });
  await requests.map(({ productId, quantity }) => fillSalesProducts(productId, sale.id, quantity)); 
  return sale.id;
}; 

const readSales = async (userId) => {
  const sales = await db.Sale.findAll({ where: { userId } }, { raw: true });
  return sales;
};

module.exports = { createSale, readSales };