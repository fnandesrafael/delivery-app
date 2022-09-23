const db = require('../database/models');

const readProducts = async () => db.Product.findAll();

module.exports = { readProducts };