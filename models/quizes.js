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
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id: DataTypes.STRING,
      title: DataTypes.STRING,
      category: DataTypes.INTEGER,
      answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Quizes',
    }
  );
  return Quizes;
};
