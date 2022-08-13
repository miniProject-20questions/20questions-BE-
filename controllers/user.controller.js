const UserService = require('../services/user.service');
require('dotenv').config();

class UserController {
   userService = new UserService();
   userSignup = async (req, res, next) => {
      const { id, password, confirm } = req.body;
      const upper = await this.userService.userSignup(id, password, confirm);
      return res.status(upper.status).json({
         message: upper.message,
      });
   };
   userSignin = async (req, res, next) => {
      const { id, password } = req.body;
      const inner = await this.userService.userSignin(id, password);
      const token = jwt.sign({ id }, process.env.SECRET_KEY);
      res.cookie(process.env.COOKIE_NAME, inner.token, { maxAge: 180000 });
      return res.status(inner.status).json({
         message: inner.message,
      });
   };
}

module.exports = UserController;
