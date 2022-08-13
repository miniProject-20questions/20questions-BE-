const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');

class UserService {
  userRepository = new UserRepository();
  userSignup = async (id, password, confirm) => {
    if (password !== confirm) {
      return { status: 401, message: '같지 않은 비밀번호입니다.' };
    }
    const user = await this.userRepository.getUser(id);
    if (user != undefined) {
      return { status: 400, message: '이미 있는 아이디' };
    }
    const create = await this.userRepository.createUser(id, password);
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
    return { status: 200, message: id + '님, 환영합니다!', token: token };
  };
}

module.exports = UserService;
