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
}

module.exports = UserRepository;
