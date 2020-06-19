'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.TEXT
  }, {});
  Categories.associate = function (models) {
    // associations can be defined here
    Categories.belongsToMany(models.Recipes, {
      through: 'RecipesCategories',
      foreignKey: 'categoriesID',
      otherKey: 'recipesID'
    })
  };
  return Categories;
};