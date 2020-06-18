'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [{
      name: 'butter',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'sticks',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'salty',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    await queryInterface.bulkInsert('Recipes', [{
      name: 'Buttered Toast',
      review: 'bla bla bla',
      description: 'excellent nofill recipe',
      url: 'https://butter.com',
      likes: 10,
      vegetarian: true,
      vegan: false,
      gf: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Popcorn Popcorn',
      review: 'bla bla bla',
      description: 'yep',
      url: 'https://popcorn.com',
      likes: 2,
      vegetarian: true,
      vegan: false,
      gf: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Big Salad',
      review: 'yadda yadda yadda',
      description: 'its, a bit salad!',
      url: 'https://salad.com',
      likes: 10,
      vegetarian: true,
      vegan: true,
      gf: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    return await queryInterface.bulkInsert('RecipesCategories', [{
      recipesID: 1,
      categoriesID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      recipesID: 2,
      categoriesID: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      recipesID: 1,
      categoriesID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      recipesID: 3,
      categoriesID: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
    await queryInterface.bulkDelete('RecipesCategories', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
