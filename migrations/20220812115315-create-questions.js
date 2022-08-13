'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Questions', {
         questionId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         quizid: {
            type: Sequelize.INTEGER,
         },
         content: {
            type: Sequelize.STRING,
         },
         solved: {
            type: Sequelize.BOOLEAN,
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
      await queryInterface.dropTable('Questions');
   },
};
