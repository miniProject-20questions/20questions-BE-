const UserService = require('../services/user.service');
require('dotenv').config();

class UserController {
   userService = new UserService();

   //로그인 중인 유저 정보확인
   checkUser=async(req,res,next)=>{
      res.json(res.locals.user);
   }

   //회원가입
   userSignup = async (req, res, next) => {
      const { id, password, confirm ,nickname} = req.body;

      const upper = await this.userService.userSignup(id, password, confirm,nickname);

      return res.status(upper.status).json({
         message: upper.message,
      });
   };

   //로그인
   userSignin = async (req, res, next) => {
      const { id, password} = req.body;

      const inner = await this.userService.userSignin(id, password);

      //토큰 쿠키에 저장 테스트용
      res.cookie(process.env.COOKIE_NAME, inner.token, { maxAge: 1800000000 });
      
      //프론트로 토큰 전송
      return res.send({
         message: inner.message,
         token: inner.token
      });
      // return res.status(inner.status).json({
      //    message: inner.message,
      // });
   };
}

module.exports = UserController;
