const { Users } = require('../models');

class UserRepository {
   getUser = async (id) => {
      try{
         const user = await Users.findOne({
            where: {
               id,
            },
         });
         return user;
      }catch(err){
         const error= new Error("FAILD_SQL");
         error.code=405 ;
         throw error;
      }
   };
   createUser = async (id, password,nickname) => {
      try{
         const create = await Users.create({
            id,
            password,
            nickname,
         });
         return create;
      }catch(err){
         const error= new Error("FAILD_SQL");
         error.code=405 ;
         throw error;
      }
   };
   getNickname=async(nickname)=>{
      try{
         const nick = await Users.findOne({
            where: {
               nickname,
            },
         });
         return nick;
      }catch(err){
         const error= new Error("FAILD_SQL");
         error.code=405 ;
         throw error;
      }
   }
   getNicknameById=async(userId)=>{
      try{
         const nickname=await Users.findOne({
            where:{
               userId
            }
         })
         return nickname
      }catch(err){
         const error= new Error("FAILD_SQL");
         error.code=405 ;
         throw error;
      }
   }
}

module.exports = UserRepository;
