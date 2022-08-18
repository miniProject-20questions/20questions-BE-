const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const authMiddlewares = require('../middlewares/auth-middleware');
const userController = new UserController();
//test용 로그인 유저 확인
router.get("/",authMiddlewares,userController.checkUser);
//회원가입>>controller
router.post('/signup', userController.userSignup);
//로그인>>controller
router.post('/signin',userController.userSignin);
//아이디 체크
router.post('/idCheck',userController.idCheck);

module.exports = router;
