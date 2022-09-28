const { verifyToken } = require('../service/tokenService');

const tokenMiddleware = async (req, _res, next) => {
  const { authorization } = req.headers;
  const id = await verifyToken(authorization);
  req.user = id;
  next();
};

module.exports = { tokenMiddleware };