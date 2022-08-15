const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/user.repository');
require('dotenv').config();
const userRepository = new UserRepository();

module.exports = async (req, res, next) => {
   // const { authorization } = req.headers;
   const authorization = req.headers.cookie;
   // const [authType, authToken] = (authorization || '').split(' ');
   const [authType, authToken] = (authorization || '').split('=');
console.log(authToken,authType)
   if (!authToken || authType !== process.env.COOKIE_NAME) {
      return res.status(401).send({
         errorMessage: '로그인 후 이용 가능한 기능입니다.',
      });
   }
   try {
      const { id } = jwt.verify(authToken, process.env.SECRET_KEY);
      await userRepository.getUser(id).then((user) => {
         res.locals.user = user;
         next();
      });
   } catch (err) {
      res.status(401).send({
         errorMessage: 'NONE_LOGIN',
      });
   }
};
