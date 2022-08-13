const express = require("express");
const router = express.Router();
const UserController=require("../controllers/user.controller")
const loginmidlleware=require("../middlewares/login-middleware")
const userController=new UserController();
//회원가입>>controller
router.post("/signup",userController.userSignup);
//로그인>>controller
router.post("/signin",loginmidlleware,userController.userSignin);

module.exports=router