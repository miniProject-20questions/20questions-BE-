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
      try{

         const upper = await this.userService.userSignup(id, password, confirm,nickname);
         
         return res.status(upper.status).send("SUCCES")
      }catch(err){
         console.log(err)
         return res.status(err.code).send(err.message)
      }
   };

   //로그인
   userSignin = async (req, res, next) => {
      const { authorization } = req.headers;
      if(authorization!==null||authorization!==undefined){
         return res.status(400).send("DONE_LOGIN");
      }
      const { id, password} = req.body;
      try{
         const inner = await this.userService.userSignin(id, password);

         //토큰 쿠키에 저장 테스트용
         // res.cookie(process.env.COOKIE_NAME, inner.token, { maxAge: 1800000000 });

         //프론트로 토큰 전송
         console.log(inner.token+"|"+res.locals.login)
         if(inner.token===res.locals.login){
            const error= new Error("Forbidden")
            error.code=403;
            throw error
         }
         return res.status(inner.status).json({
            message: "SUCCES",
            token: inner.token
         });

      }catch(err){
         if(err===403){
            console.log(err)
            return res.status(err.code).send(err.message);
         }
         console.log(err)
         return res.status(err.code).send(err.message);
      }
   };

   //아이디 중복확인
   idCheck= async(req,res)=>{
      const { id } = req.body;
      try{
         const check = await this.userService.idCheck(id);
         
         return res.status(check.status).send(check.message)
      }catch(err){
         console.log(err)
         return res.status(err.code).send(err.message)
      }
   }
}

module.exports = UserController;
