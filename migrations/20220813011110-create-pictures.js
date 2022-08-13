'use strict';
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Pictures', {
         category: {
            type: Sequelize.INTEGER,
         },
         url: {
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
      await queryInterface.dropTable('Pictures');
   },
};
