'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('avatars', [{
      img_src: '/avatar/avatar1'
    },
    {
      img_src: '/avatar/avatar2'
    }, {
      img_src: '/avatar/avatar3'
    }, {
      img_src: '/avatar/avatar4'
    }, {
      img_src: '/avatar/avatar5'
    }, {
      img_src: '/avatar/avatar6'
    }, {
      img_src: '/avatar/avatar7'
    }, {
      img_src: '/avatar/avatar8'
    }, {
      img_src: '/avatar/avatar9'
    }].map(a => {
      a.created_at = new Date(); a.updated_at = new Date();
      return a;
    }));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('avatars', null, {});
  }
};
