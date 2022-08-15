const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
// 아이디 길이는 4~9자리
// 영문 대소문자,숫자만 사용가능
// 비밀번호 길이도 4~9자리
// 영문대소문자, 숫자만 사용가능
class UserService {
   userRepository = new UserRepository();

   //회원가입 진행
   userSignup = async (id, password, confirm,nickname) => {
      if (password !== confirm) {
         return { status: 401, message: '같지 않은 비밀번호입니다.' };
      }
      //user:이미있는 유저중에 같은 id를 사용하는지 확인하기위해서 id로 유저정보를 가지고온다.
      const user = await this.userRepository.getUser(id);

      //nick:이미있는 유저중에 같은 nickname를 사용하는지 확인하기위해서 nickname로 유저정보를 가지고온다.
      const nick = await this.userRepository.getNickname(nickname);

      //정규식
      //영어,숫자 4~9자리 (3인이유는 <이기떄문에)
      const reg_Id = /^[A-Za-z0-9]{3,9}$/.test(id);
      //영어,숫자 4~9자리 (3인이유는 <이기떄문에)
      const reg_Pw = /^[A-Za-z0-9]{3,9}$/.test(password);
      //특수문자 제외
      const reg_Nick1 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(nickname);
      //자리수가 4이상 9이하를 제외
      const reg_Nick2 = nickname.length <4 || nickname>9;
      
      //user가 없으면 id가 같은 유저가 없다.
      if (user != undefined) {
         return { status: 400, message: '이미 있는 아이디' };
      }//nick이 없으면 nickname가 같은 유저가 없다.
      else if(nick!=undefined){
         return { status: 400, message: '이미 있는 닉네임' };  
      }//정규식으로 확인되는 아이디
       else if (!reg_Id) {
         return { status: 400, message: '조건이 맞지 않은 아이디' };
      }//정규식으로 확인되는 비밀번호
       else if (!reg_Pw) {
         return { status: 400, message: '조건이 맞지 않은 비밀번호' };
      }//정규식으로 확인되는 닉네임
       else if (reg_Nick1 || reg_Nick2) {
         return { status: 400, message: '조건이 맞지 않은 닉네임' };
      }
      
      //회원가입 진행
      const create = await this.userRepository.createUser(id, password,nickname);
      if (create == undefined) {
         return { status: 400, message: '회원가입실패' };
      }
      return { status: 200, message: '회원가입을 축하드립니다!' };
   };

   //로그인 진행
   userSignin = async (id, password) => {
      //유저의 존재를 확인하기 위해 id를 기준으로 Users테이블 탐색
      const user = await this.userRepository.getUser(id);
      if (user == undefined) {
         return { status: 400, message: '잘못된 id 또는 pw' };
      } else if (password != user.password) {
         return { status: 401, message: '잘못된 id 또는 pw' };
      }

      //토큰 생성
      const token = jwt.sign({ id }, process.env.SECRET_KEY);
      
      //토큰과 상태,메시지 전송
      return { status: 200, message: user.nickname + '님, 환영합니다!', token: token };
   };
}

module.exports = UserService;
