const db = require("../database/models");

const fillSalesProducts = async (productId, saleId, quantity) =>
  db.SalesProducts.create({ productId, saleId, quantity }, { raw: true });

const createSale = async (requests, totalPrice, customerAdress) => {
  const { userId, sellerId } = requests[0];
  const { address, number } = customerAdress;
  const sale = await db.Sale.create(
    {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
    },
    { raw: true }
  );
  await requests.map(({ productId, quantity }) =>
    fillSalesProducts(productId, sale.id, quantity)
  );
  return sale.id;
};

const readSellerRequests = async (sellerId) => {
  const sales = await db.Sale.findAll({ where: { sellerId } }, { raw: true });
  return sales;
};

const readSales = async (userId) => {
  const sales = await db.Sale.findAll({ where: { userId } }, { raw: true });
  return sales;
};

const structureSalesProducts = (salesDetails) =>
  salesDetails.map((obj) =>
    obj.products.map((product) => {
      const request = {
        name: product.name,
        price: product.price,
        quantity: product.SalesProducts.quantity,
        subTotal: product.SalesProducts.quantity * +product.price,
      };
      return request;
    })
  );

const structureSalesDetails = (salesDetails, data) =>
  salesDetails.map((obj) => {
    const newdata = {
      saleId: obj.id,
      sellerId: obj.sellerId,
      deliveryAddress: obj.deliveryAddress,
      saleDate: obj.saleDate,
      products: data[0],
      status: obj.status,
    };
    return newdata;
  });

const readSaleDetails = async (saleId) => {
  try {
    const salesDetails = await db.Sale.findAll({
      where: { id: saleId },
      include: {
        as: "products",
        model: db.Product,
        required: true,
        attributes: ["name", "price"],
      },
    });
    const data = structureSalesProducts(salesDetails);
    const detailsFormated = structureSalesDetails(salesDetails, data);

    return detailsFormated;
  } catch (error) {
    console.log(error);
  }
};

const readSellers = async () => {
  const sellers = db.User.findAll({
    attributes: { exclude: ["password"] },
    where: { role: "seller" },
  });
  return sellers;
};

module.exports = {
  createSale,
  readSales,
  readSaleDetails,
  readSellers,
  readSellerRequests,
};
