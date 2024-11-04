'use strict';

const { Post } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Post.bulkCreate([
      {
        title: 'Осень в лесу',
        desc: 'Золотая палитра листьев, тихий шелест ветра, запах сырой земли и свежескошенной травы.',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYASTegDVpY7bSTcGoIoF-gUJoXGzYdpu9A&s',
      },
      {
        title: 'Осень в парке',
        desc: 'Красочные пейзажи парка, уютные скамейки, дети, играющие в опавших листьях, и вечера, наполненные ароматом свежесваренного чая.',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYQ7jr00dSLrZgICO5-o4APJPU498tYw4bw&s',
      },
      {
        title: 'Осень на даче',
        desc: 'Подготовка к зиме, сбор урожая, закаты, окрашивающие небо в теплые тона, и уютные вечера у камина.',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yor6JdSPf0TF8yO9rRB_ILd3r1ruid7gcg&s',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
