const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/user.repository');
require('dotenv').config();
const userRepository = new UserRepository();

module.exports = (req, res, next) => {
  // const { authorization } = req.headers;
  const token = req.headers.cookie;
  if (token) {
    return res.status(401).send({
      errorMessage: '이미 로그인 되어 있습니다.',
    });
  }
  next();
};
