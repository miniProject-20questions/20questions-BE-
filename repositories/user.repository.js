const { Users } = require('../models');

class UserRepository {
   getUser = async (id) => {
      const user = await Users.findOne({
         where: {
            id,
         },
      });
      return user;
   };
   createUser = async (id, password,nickname) => {
      const create = await Users.create({
         id,
         password,
         nickname,
      });
      return create;
   };
   getNickname=async(nickname)=>{
      const nick = await Users.findOne({
         where: {
            nickname,
         },
      });
      return nick;
   }
   getNicknameById=async(userId)=>{
      const nickname=await Users.findOne({
         where:{
            userId
         }
      })
      return nickname
   }
}

module.exports = UserRepository;
