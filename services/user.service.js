const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
// 아이디 길이는 4~9자리
// 영문 대소문자,숫자만 사용가능
// 비밀번호 길이도 4~9자리
// 영문대소문자, 숫자만 사용가능
class UserService {
   userRepository = new UserRepository();
   userSignup = async (id, password, confirm,nickname) => {
      if (password !== confirm) {
         return { status: 401, message: '같지 않은 비밀번호입니다.' };
      }
      const user = await this.userRepository.getUser(id);
      const reg_Id = /^[A-Za-z0-9]{3,9}$/.test(id);
      const reg_Pw = /^[A-Za-z0-9]{3,9}$/.test(password);
      const reg_Nick = /^[A-Za-z0-9]{3,9}$/.test(nickname);
      if (user != undefined) {
         return { status: 400, message: '이미 있는 아이디' };
      } else if (!reg_Id) {
         return { status: 400, message: '조건이 맞지 않은 아이디' };
      } else if (!reg_Pw) {
         return { status: 400, message: '조건이 맞지 않은 비밀번호' };
      } else if (!reg_Nick) {
         return { status: 400, message: '조건이 맞지 않은 닉네임' };
      }

      const create = await this.userRepository.createUser(id, password,nickname);
      if (create == undefined) {
         return { status: 400, message: '회원가입실패' };
      }
      return { status: 200, message: '회원가입을 축하드립니다!' };
   };
   userSignin = async (id, password) => {
      const user = await this.userRepository.getUser(id);
      if (user == undefined) {
         return { status: 400, message: '잘못된 id 또는 pw' };
      } else if (password != user.password) {
         return { status: 401, message: '잘못된 id 또는 pw' };
      }
      const token = jwt.sign({ id }, process.env.SECRET_KEY);
      return { status: 200, message: user.nickname + '님, 환영합니다!', token: token };
   };
}

module.exports = UserService;
