const { verifyToken } = require('../service/tokenService');

const tokenMiddleware = async (req, _res, next) => {
  const { authorization } = req.headers;
  await verifyToken(authorization);  
  next();
};

module.exports = { tokenMiddleware };