'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Quizes', {
         quizId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         userId: {
            type: Sequelize.INTEGER,
         },
         title: {
            type: Sequelize.STRING,
         },
         category: {
            type: Sequelize.INTEGER,
         },
         answer: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('Quizes');
   },
};
