'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: DataTypes.TEXT,
    review: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    vegan: DataTypes.BOOLEAN,
    gf: DataTypes.BOOLEAN
  }, {});
  Recipes.associate = function (models) {
    // associations can be defined here
    Recipes.belongsToMany(models.Categories, { through: 'RecipesCategories' })
  };
  return Recipes;
};