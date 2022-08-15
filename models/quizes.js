'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   class Quizes extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Quizes.init(
      {
         quizId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
         },
         userId: {
            type: DataTypes.INTEGER,
            required : true,            
         },
         title: {
            type: DataTypes.STRING,
            required : true,
         },
         category: {
            type: DataTypes.INTEGER,
            required : true,            
         },
         answer: {
            type: DataTypes.STRING,
            required : true,
            allowNull : false,
         },
         createdAt: {
            allowNull: false,
            type: DataTypes .DATE,
            defaultValue: sequelize.fn('now'),
          },
      },
      {
         sequelize,
         modelName: 'Quizes',
      }
   );
   return Quizes;
};
