'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Questions.init({
    questionId: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    quizId: {
      allowNull: false,
      required: true,
      type: DataTypes.INTEGER,
    },
    content: {
      allowNull: false,
      required: true,
      type: DataTypes.STRING,
    },
    solved: DataTypes.BOOLEAN,
    count: {
      allowNull: false,
      required: true,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Questions',
  });

  Questions.associate = function (models) {
    models.Questions.belongsTo(models.Quizes, {
    foreignKey: "quizId",
    onUpdate: "cascade",
    onDelete: "cascade",
    });
    };

 

  return Questions;
};