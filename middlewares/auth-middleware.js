const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/user.repository');
require('dotenv').config();
const userRepository = new UserRepository();

module.exports = async (req, res, next) => {
   const { authorization } = req.headers;
//    const authorization = req.headers.cookie;
   const [authType, authToken] = (authorization || '').split(' ');
//    const [authType, authToken] = (authorization || '').split('=');
   if (!authToken || authType !== process.env.COOKIE_NAME) {
      return res.status(401).send("NONE_LOGIN");
   }
   try {
      const token = jwt.verify(authToken, process.env.SECRET_KEY);
      const id =token.id
      await userRepository.getUser(id).then((user) => {
         res.locals.user = user;
         next();
      });
   } catch (err) {
      res.status(401).send('NONE_LOGIN');
   }
};
