'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class Users extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Users.init(
      {
         userId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
         },
         id: DataTypes.STRING,
         nickname: DataTypes.STRING,
         password: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Users',
      }
   );

   Users.associate = function (models) {
      models.Users.hasMany(models.Quizes, {
      foreignKey: "userId",         
      });      
   };

   

   return Users;
};
