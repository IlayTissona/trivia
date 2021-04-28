'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('avatars', [{
      img_src: '/api/avatar/avatar1'
    },
    {
      img_src: '/api/avatar/avatar2'
    }, {
      img_src: '/api/avatar/avatar3'
    }, {
      img_src: '/api/avatar/avatar4'
    }].map(a => {
      a.created_at = new Date(); a.updated_at = new Date();
      return a;
    }));
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('avatars', null, {});
  }
};
