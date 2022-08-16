const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/user.repository');
require('dotenv').config();
const userRepository = new UserRepository();

module.exports = (req, res, next) => {
   // const { authorization } = req.headers;
   // const authorization = req.headers.cookie;
   res.locals.login=authorization
   next();
};
