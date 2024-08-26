"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name_hiragana: {
        type: Sequelize.STRING,
      },
      name_katakana: {
        type: Sequelize.STRING,
      },
      name_romaji: {
        type: Sequelize.STRING,
      },
      audio_play: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
